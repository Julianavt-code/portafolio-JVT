/* ==========================================================================
   jv portfolio · assets-manifest.js
   Juliana Vieira — Portafolio de Animación 3D (Universidad EAFIT)
   --------------------------------------------------------------------------
   Mapa único de evidencias. index.html lee este archivo y construye solo
   las tarjetas, visores 3D, videos, capturas, documentos e inventario.
   Para agregar una evidencia: copia el archivo en ./assets/<task>/ y añade
   una línea en el bloque de esa task. Rutas SIEMPRE relativas (./assets/...).
   ========================================================================== */
window.JDG_MANIFEST = {
  brand: "jv portfolio",
  owner: "Juliana Vieira",
  subtitle: "Juliana Vieira — Portafolio de Animación 3D",
  program: "Universidad EAFIT · Animación 3D",
  tools: ["Autodesk Maya", "HumanIK", "Mixamo", "Unity 6 (URP)", "Three.js r160"],

  categories: {
    individual: "Tasks Individuales (03–07)",
    personaje: "Evolución de Personaje",
    animacion: "Ciclos de animación",
    equipo: "Entrega Final en Equipo"
  },

  tasks: [
    {
      id: "task03", num: "03", title: "Ita proxy: primitivas + rig",
      cats: ["individual", "personaje"], autoria: "Individual",
      kicker: "Personaje proxy",
      summary: "Construí mi versión del proxy de Ita con primitivas y le armé el esqueleto con su Control Rig de HumanIK (namespace Demo_proxy), la base sobre la que animé todos mis ciclos.",
      fbx: [{ label: "Proxy + rig HumanIK (Task 03)", file: "assets/task03/CHR_Ita_Proxy_Task03.fbx" }],
      videos: [], images: [], docs: []
    },
    {
      id: "task05", num: "04·05", title: "Tres idles con el proxy",
      cats: ["individual", "animacion"], autoria: "Individual",
      kicker: "Ciclos idle",
      summary: "Animé tres ciclos de reposo distintos (Idle 01, 02 y 03) sobre el rig del proxy, cada uno con su propia actitud, para que Ita pudiera quedarse quieta sin verse congelada.",
      fbx: [
        { label: "Idle 01", file: "assets/task05/Ita_Idle01.fbx" },
        { label: "Idle 02", file: "assets/task05/Ita_Idle02.fbx" },
        { label: "Idle 03", file: "assets/task05/Ita_Idle03.fbx" }
      ],
      videos: [], images: [], docs: []
    },
    {
      id: "task06", num: "06", title: "Run & Jump con el proxy",
      cats: ["individual", "animacion"], autoria: "Individual",
      kicker: "Locomoción",
      summary: "Animé los ciclos de carrera y salto de Ita sobre el rig del proxy, cuidando el contacto con el piso, la anticipación del salto y el impacto al aterrizar.",
      fbx: [
        { label: "Run", file: "assets/task06/Ita_Run.fbx" },
        { label: "Jump", file: "assets/task06/Ita_Jump.fbx" }
      ],
      videos: [], images: [], docs: []
    },
    {
      id: "task07", num: "07", title: "Ita final: UVs, horneado, LODs y textura Naranja",
      cats: ["individual", "personaje"], autoria: "En pareja (50/50 con Jimena Duque)",
      kicker: "Personaje final",
      summary: "Con Jimena Duque reemplazamos el proxy por la malla final de Ita. Mi parte: desplegar y empaquetar las UVs, generar la malla HIGH, hornear Normal y AO, reducir los LOD1 y LOD2, transferir los pesos de skin y pintar mi versión cromática Naranja.",
      fbx: [{ label: "Ita Naranja (malla final + rig)", file: "assets/task07/Ita_Naranja.fbx" }],
      videos: [],
      images: [
        { label: "Render de Ita Naranja", file: "assets/task07/captures/Ita_Naranja_preview.jpg" },
        { label: "Mi UV Layout", file: "assets/task07/captures/T_Ita_UVLayout.png" },
        { label: "Mi textura Albedo Naranja", file: "assets/task07/captures/T_Ita_Albedo_Naranja.jpg" },
        { label: "Mapa Normal horneado (HIGH → LOD0)", file: "assets/task07/captures/T_Ita_Normal_bake.png" },
        { label: "Mapa de Ambient Occlusion horneado", file: "assets/task07/captures/T_Ita_AO.jpg" },
        { label: "Mapa de Roughness", file: "assets/task07/captures/T_Ita_Roughness.jpg" },
        { label: "Comparativa LOD0 / LOD1 / LOD2 en Unity", file: "assets/task07/captures/Comparativa_LOD_Unity.jpg" },
        { label: "Unity · LOD0", file: "assets/task07/captures/Unity_LOD0.jpg" },
        { label: "Unity · LOD1", file: "assets/task07/captures/Unity_LOD1.jpg" },
        { label: "Unity · LOD2", file: "assets/task07/captures/Unity_LOD2.jpg" }
      ],
      docs: [{ label: "Ficha técnica y justificación de optimización (.pdf)", file: "assets/task07/Ficha_Tecnica_Optimizacion_Ita.pdf" }]
    },
    {
      id: "final", num: "F", title: "Entrega Final · Leyend-itas (equipo de 6)",
      cats: ["equipo", "personaje", "animacion"], autoria: "Equipo (6 integrantes)",
      kicker: "Animación final",
      summary: "Tráiler animado en Maya y cinemática en tiempo real en Unity con Ita Naranja, Ita Azul, la Llorona y la Patasola en el escenario del territorio de los Itas y la dimensión Leyend-itas.",
      fbx: [
        { label: "Ita Naranja · Walk (clip Mixamo)", file: "assets/entrega_final/ita_naranja/Ita_Naranja_Walk.fbx" },
        { label: "Ita Naranja · Combat (clip Mixamo)", file: "assets/entrega_final/ita_naranja/Ita_Naranja_Combat.fbx" },
        { label: "Ita Naranja · Jump (clip Mixamo)", file: "assets/entrega_final/ita_naranja/Ita_Naranja_Jump.fbx" },
        { label: "Ita Naranja · Mosquitos (clip Mixamo)", file: "assets/entrega_final/ita_naranja/Ita_Naranja_Mosquitos.fbx" },
        { label: "Escenario · territorio de los Itas (equipo)", file: "assets/entrega_final/escenario/Leyenditas_Escenarios.fbx", only: "^ESC_Itas", fitExclude: "fondo_cielo" },
        { label: "Escenario · dimensión Leyend-itas (equipo)", file: "assets/entrega_final/escenario/Leyenditas_Escenarios.fbx", only: "^ESC_Ley", fitExclude: "fondo_cielo" }
      ],
      videos: [
        { label: "Tráiler Leyend-itas · Maya (Parte 1)", file: "assets/entrega_final/Leyenditas_Trailer_Maya.mp4", source: "Maya" },
        { label: "Cinemática Quimbayas · Unity (Parte 2)", file: "assets/entrega_final/Quimbayas_Cinematica_Unity.mp4", source: "Unity" }
      ],
      images: [
        { label: "Escenario · territorio de los Itas", file: "assets/entrega_final/captures/preview_Itas.jpg" },
        { label: "Escenario · dimensión Leyend-itas", file: "assets/entrega_final/captures/preview_Leyenditas.jpg" }
      ],
      docs: [
        { label: "Ficha técnica del equipo (transcripción)", file: "assets/entrega_final/Ficha_Tecnica_Equipo.md" },
        { label: "Créditos y Trazabilidad · PDF original (Drive del equipo)", file: "https://drive.google.com/drive/folders/1V5M_zLgdCTC9guykvzsuuBqZ5Rqop-YW", external: true }
      ]
    }
  ],

  /* Ficha técnica grupal — Creditos_y_Trazabilidad.pdf (Milestone 05) */
  team: [
    { name: "Juliana Vieira", role: "Modelado de los Itas · Escenario y animación de los personajes (en equipo)", me: true },
    { name: "Jimena Duque", role: "Modelado de los Itas · Escenario y animación de los personajes (en equipo)" },
    { name: "Dulce Rojas", role: "Modelado de la Llorona · Escenario y animación de los personajes (en equipo)" },
    { name: "Susana Sepúlveda", role: "Modelado de la Llorona · Escenario y animación de los personajes (en equipo)" },
    { name: "Génesis Rivas", role: "Modelado de la Patasola · Escenario y animación de los personajes (en equipo)" },
    { name: "Felipe López", role: "Modelado de la Patasola · Escenario y animación de los personajes (en equipo)" }
  ],

  thirdParty: [
    { item: "Clips Walk, Combat, Jump y Mosquitos de Ita Naranja", author: "Adobe Mixamo", source: "mixamo.com · biblioteca de animaciones y auto-rig", where: "Entrega final (Ita Naranja)" },
    { item: "Low-poly Gravity Falls Dipper Hat", author: "Kanna-Nakajima", source: "Sketchfab · CC Attribution", where: "Cinemática Unity (gorra de Ita Azul)" },
    { item: "FREE Skybox Extended Shader (cielo nocturno)", author: "BOXOPHOBIC", source: "Unity Asset Store · Extension Asset", where: "Cinemática Unity" },
    { item: "Plantilla URP 3D Cross-Platform 17.0.14", author: "Unity Technologies", source: "Unity Hub · Unity Companion License", where: "Configuración del pipeline" },
    { item: "Efectos de sonido (fuego, susurro, pasos, tela)", author: "dragon-studio, freesound_community, soundque, Mixkit", source: "Pixabay y Mixkit · licencia gratuita", where: "Mezcla de audio de la cinemática" },
    { item: "Clips de animación de la Llorona y la Patasola", author: "Terceros (según ficha del equipo)", source: "Declarado en Creditos_y_Trazabilidad.pdf", where: "Tráiler Maya y cinemática Unity" },
    { item: "Three.js r160 · FBXLoader · OrbitControls", author: "three.js authors", source: "MIT License · cdn.jsdelivr.net", where: "Este portafolio (visor 3D)" },
    { item: "Tipografías Syne, DM Sans y Space Mono", author: "Google Fonts", source: "SIL Open Font License", where: "Este portafolio" }
  ]
};

/* AUTO-SIZES */ /* tamaños en bytes, generados automáticamente */
window.JDG_SIZES = {
"assets/entrega_final/Ficha_Tecnica_Equipo.md": 5225,
"assets/entrega_final/Leyenditas_Trailer_Maya.mp4": 25265110,
"assets/entrega_final/Quimbayas_Cinematica_Unity.mp4": 15100663,
"assets/entrega_final/captures/preview_Itas.jpg": 176096,
"assets/entrega_final/captures/preview_Leyenditas.jpg": 158544,
"assets/entrega_final/escenario/Leyenditas_Escenarios.fbx": 4832720,
"assets/entrega_final/ita_naranja/Ita_Naranja_Combat.fbx": 3868421,
"assets/entrega_final/ita_naranja/Ita_Naranja_Jump.fbx": 3984341,
"assets/entrega_final/ita_naranja/Ita_Naranja_Mosquitos.fbx": 3941861,
"assets/entrega_final/ita_naranja/Ita_Naranja_Walk.fbx": 3901477,
"assets/entrega_final/ita_naranja/T_Ita_BaseColor.png": 2839212,
"assets/entrega_final/ita_naranja/T_Ita_Normal.png": 6011476,
"assets/task03/CHR_Ita_Proxy_Task03.fbx": 2683056,
"assets/task05/Ita_Idle01.fbx": 2528736,
"assets/task05/Ita_Idle02.fbx": 2528736,
"assets/task05/Ita_Idle03.fbx": 2528736,
"assets/task06/Ita_Jump.fbx": 2400816,
"assets/task06/Ita_Run.fbx": 2409776,
"assets/task07/Ficha_Tecnica_Optimizacion_Ita.pdf": 119638,
"assets/task07/Ita_Naranja.fbx": 3620357,
"assets/task07/T_Ita_BaseColor.png": 2839212,
"assets/task07/T_Ita_Normal.png": 6011476,
"assets/task07/captures/Comparativa_LOD_Unity.jpg": 84397,
"assets/task07/captures/Ita_Naranja_preview.jpg": 111656,
"assets/task07/captures/T_Ita_Albedo_Naranja.jpg": 219254,
"assets/task07/captures/T_Ita_AO.jpg": 123782,
"assets/task07/captures/T_Ita_Normal_bake.png": 479677,
"assets/task07/captures/T_Ita_Roughness.jpg": 344916,
"assets/task07/captures/T_Ita_UVLayout.png": 2755748,
"assets/task07/captures/Unity_LOD0.jpg": 52435,
"assets/task07/captures/Unity_LOD1.jpg": 52472,
"assets/task07/captures/Unity_LOD2.jpg": 52461
};
