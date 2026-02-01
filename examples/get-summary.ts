import { SummaryOptions, SabreLegacy } from '../src'

// Ejemplo ejecutable para search.shop
// Requisitos para ejecutar: export SABRE_USERNAME=... SABRE_PASSWORD=... SABRE_ORGANIZATION=... y RUN_EXAMPLES=1

const options: SummaryOptions = {
  date: '2026-01-25',
  pcc: '8AYC'
}

async function main() {
  const run = process.env.RUN_EXAMPLES === '1' || process.env.RUN_EXAMPLES === 'true'
  if (!run) {
    console.log('Este ejemplo está listo. Para ejecutarlo en tu entorno con credenciales:')
    console.log('RUN_EXAMPLES=1 npm run example:get-summary')
    return
  }

  const { SABRE_SESSION_TOKEN } = process.env
  if (!SABRE_SESSION_TOKEN) {
    console.error('Faltan variables de entorno: SABRE_SESSION_TOKEN')
    return
  }

  const { SABRE_ORGANIZATION } = process.env
  if (!SABRE_ORGANIZATION) {
    console.error('Faltan variables de entorno: SABRE_ORGANIZATION')
    return
  }

  const sabre = new SabreLegacy()

  try {
    sabre.setAuthorization(SABRE_SESSION_TOKEN);
    const res = await sabre.dailySales.summary(options)
    console.log('Respuesta:', JSON.stringify(res));
  } catch (err) {
    console.error('Error al llamar a dailySales.summary:', err)
  }
}

void main()
