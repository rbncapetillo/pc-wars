app.service('serviceCatalog', function() {
  return {
    powerReview: false,
    settingsReview: false,
    defaultProcessorView: true,
    newProcessorView: false,
    newProcessor: {},
    defaultHddView: true,
    newHddView: false,
    newHdd: {},
    defaultRamView: true,
    newRamView: false,
    newRam: {},
    defaultGcView: true,
    newGcView: false,
    newGc: {},
    selectedProcessor: {},
    selectedHdd: {},
    selectedRam: {},
    selectedGc: {},
    defaultComponents: {
      processor: "Soy un procesador bien ardiente",
      hdd: "Me dicen el entero",
      ram: "¿quierers verme subir esa colina? ¿quieres verme hacerlo de nuevo?",
      gc: "La tarjeta gráfica mas puerca"
    }
  }
});