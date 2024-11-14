import qrcode, { QRCodeToDataURLOptions } from 'qrcode';
import { crc16ccitt } from 'crc';
import { string, number } from 'yup';

interface QrCodePixParams {
    version: string;
    key: string;
    city: string;
    name: string;
    value?: number;
    transactionId?: string;
    message?: string;
    cep?: string;
    currency?: number;
    countryCode?: string;
}

function QrCodePix({
    version,
    key,
    city,
    name,
    value,
    message,
    cep,
    transactionId = '***',  // Simplificado para padrão PIX
    currency = 986,
    countryCode = 'BR',
}: QrCodePixParams) {
    // Validações básicas
    string().equals(['01'], 'Version not supported').validateSync(version);
    string().min(2).max(2).nullable().validateSync(countryCode);
    string().min(8).max(8).nullable().validateSync(cep);
    number().nullable().positive().validateSync(value);
    string().max(25).nullable().validateSync(transactionId);

    // Formata a chave do CPF para apenas números
    const formattedKey = key.replace(/\D/g, '');

    // Geração do payload para chave PIX
    const payloadKeyString = generateKey(formattedKey, message);

    // Criação do payload completo
    const payload: string[] = [
        genEMV('00', version),
        genEMV('26', payloadKeyString),
        genEMV('52', '0000'), // Merchant Category Code
        genEMV('53', String(currency)),
    ];

    // Inclui o valor, se existir
    if (value) {
        payload.push(genEMV('54', value.toFixed(2)));
    }

    // Formatação de nome e cidade
    name = formatString(name, 25);
    city = formatString(city, 15);

    payload.push(genEMV('58', countryCode.toUpperCase()));
    payload.push(genEMV('59', name));
    payload.push(genEMV('60', city));

    // Inclui o CEP, se existir
    if (cep) {
        payload.push(genEMV('61', cep));
    }

    // Inclui o Transaction ID
    payload.push(genEMV('62', genEMV('05', transactionId)));
    payload.push('6304'); // Placeholder para o CRC

    // Cálculo do CRC16 com `TextEncoder` para compatibilidade React Native
    const stringPayload = payload.join('');
    const crcResult = crc16ccitt(toUint8Array(stringPayload)).toString(16).toUpperCase().padStart(4, '0');

    const payloadPIX = `${stringPayload}${crcResult}`;

    return {
        payload: () => payloadPIX,
        base64: (options?: QRCodeToDataURLOptions) => qrcode.toDataURL(payloadPIX, options),
    };
}

// Função auxiliar para converter string em Uint8Array para o cálculo do CRC16
function toUint8Array(str: string): Uint8Array {
    return new TextEncoder().encode(str);
}

// Gera a chave PIX no formato esperado
function generateKey(key: string, message?: string): string {
    const payload: string[] = [
        genEMV('00', 'BR.GOV.BCB.PIX'), // Identificador do Banco Central
        genEMV('01', key)               // Chave PIX (CPF formatado)
    ];
    if (message) {
        payload.push(genEMV('02', message)); // Mensagem opcional
    }
    return payload.join('');
}

// Função para formatar strings com caracteres limitados e maiúsculas
function formatString(str: string, maxLength: number): string {
    return str
        .substring(0, maxLength)
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

// Função para formatar campos no padrão EMV
function genEMV(id: string, parameter: string): string {
    const len = parameter.length.toString().padStart(2, '0');
    return `${id}${len}${parameter}`;
}

export { QrCodePixParams, QrCodePix };
