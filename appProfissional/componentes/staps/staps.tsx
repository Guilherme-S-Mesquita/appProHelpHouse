import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Modal } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import api from '../../axios';
import { QrCodePix } from '../pix';
import QRCode from 'react-native-qrcode-svg';
import myContext from '../../src/functions/authContext';

interface Pedido {
  idSolicitarPedido: number;
  andamentoPedido?: string;

  contratante?: {
    nomeContratante: string;
    emailContratante: string;
    cepContratante: string;
    cidadeContratante: string;
  };

  contrato?: {
    valor: string;
  };
}

interface StapsProps {
  pedido: Pedido | null;
}

const secondIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 4,
  currentStepStrokeWidth: 4,
  stepStrokeCurrentColor: '#005EB8',
  stepStrokeWidth: 4,
  separatorStrokeFinishedWidth: 4,
  stepStrokeFinishedColor: '#005EB8',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#005EB8',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#005EB8',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#005EB8',
};
const labels = ["À caminho", "Serviço em andamento", "Gerar qrCode", "Finalizar pedido"];
const statusMap: Record<string, number> = {
  'a_caminho': 1,
  'em_andamento': 2,
  'ReceberPagamento': 3,
  'concluido': 4,
};

export default function Staps({ pedido }: StapsProps) {
  const [currentPosition, setCurrentPosition] = React.useState<number>(0);
  const [qrCodePayload, setQrCodePayload] = React.useState<string | null>(null);
  const [showQrCodeModal, setShowQrCodeModal] = React.useState<boolean>(false);
  const { user } = React.useContext(myContext);

  React.useEffect(() => {
    if (pedido && pedido.contrato && pedido.andamentoPedido) {
      const initialPosition = statusMap[pedido.andamentoPedido] ?? 0;
      setCurrentPosition(initialPosition);
    }
  }, [pedido]);

  if (!pedido || !pedido.contrato) {
    return <Text>Informações do contrato não disponíveis.</Text>;
  }

  const valorTotal = pedido.contrato.valor;
  const idSolicitarPedido = pedido.idSolicitarPedido;

  const updateOrderStatus = async (newStatus: string, valorTotal: string, idSolicitarPedido: number) => {
    try {
      const response = await api.patch(`/pedidos/${idSolicitarPedido}/acoes`, {
        novaEtapa: newStatus,
        valorTotal: valorTotal,
      });

      if (response.status === 200) {
        Alert.alert("Sucesso", response.data.message || "Etapa atualizada com sucesso!");
        if (newStatus === 'ReceberPagamento' && pedido && pedido.contrato) {
          handleGeneratePix(pedido);
        }
        setCurrentPosition((prevPosition) => prevPosition + 1);
      } else {
        Alert.alert("Erro", "Não foi possível atualizar o status.");
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Houve um problema ao atualizar o status.";
      Alert.alert("Erro", errorMessage);
      console.error("Erro ao atualizar status:", error);
    }
  };

  async function handleGeneratePix(pedido: Pedido) {
    if (pedido.contrato) {
      const { valor } = pedido.contrato;

      if (!user) {
        Alert.alert("Erro", "A chave Pix (email do contratante) está ausente.");
        return;
      }

      const cepFormatado = user.cepContratado.replace(/-/g, '');
      const transactionId = user.cpfContratado.replace(/\D/g, '').slice(0, 25);

      const qrCodePix = QrCodePix({
        version: '01',
        key: user.emailContratado,
        name: user.nomeContratado,
        city: user.cidadeContratado,
        transactionId: transactionId,
        cep: cepFormatado,
        value: parseFloat(valor),
        message: `Pagamento de ${user.nomeContratado}`
      });
      console.log(transactionId);
      console.log(qrCodePix.payload()); // '00020101021126510014BR.GOV.BCB.PIX...'
      const payload = qrCodePix.payload();
      setQrCodePayload(payload);
      setShowQrCodeModal(true);
    }
  }

  const handleNextStep = () => {
    if (currentPosition < labels.length) {
      const newStatus = Object.keys(statusMap).find(key => statusMap[key] === currentPosition + 1);
      if (newStatus) {
        updateOrderStatus(newStatus, valorTotal, idSolicitarPedido);
      } else {
        Alert.alert("Erro", "Não foi possível determinar a próxima etapa.");
      }
    } else {
      Alert.alert("Informação", "O pedido foi finalizado.");
      // Aqui você pode adicionar uma ação adicional, como redirecionamento ou limpeza de dados.
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={secondIndicatorStyles}
          currentPosition={currentPosition}
          direction="vertical"
          labels={labels}
          stepCount={labels.length}
        />
      </View>

      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={[styles.nextButton, currentPosition === labels.length && { backgroundColor: '#005EB8', opacity: 0.7 }]}
          onPress={handleNextStep}
        >
          <Text style={styles.buttonText}>
            {currentPosition === labels.length ? 'Finalizar Pedido' : labels[currentPosition]}
          </Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showQrCodeModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>QR Code PIX</Text>
            {qrCodePayload && (
              <QRCode
                value={qrCodePayload}
                size={200}
              />
            )}
            <TouchableOpacity onPress={() => setShowQrCodeModal(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },
  stepIndicator: {
    width: 80,
    marginVertical: 50,
    height: 200,
    position:'relative',
    bottom:50
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },

  nextButton: {
    backgroundColor: '#005EB8',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    position:'relative',
    top:50,
    right:80
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#005EB8',
    borderRadius: 5
  },
  closeButtonText: {
    color: '#fff'
  },
});
