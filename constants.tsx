
import { SystemCard, ProcessStep, InstitutionalProject } from './types';

export const SYSTEMS: SystemCard[] = [
  {
    id: 'haki-delivery',
    title: 'HAKI Delivery',
    description: 'Gestión integral de pedidos y soberanía digital para el sector Horeca. Control total del dato y optimización de márgenes.',
    icon: 'restaurant',
    tag: 'HAKI_CORE',
    category: 'Transaccional'
  },
  {
    id: 'haki-riders',
    title: 'HAKI Riders',
    description: 'Capa de inteligencia logística para última milla. Optimización dinámica de rutas y despacho inteligente.',
    icon: 'delivery_dining',
    tag: 'LOG_OPT',
    category: 'Logística'
  },
  {
    id: 'turismo-rural',
    title: 'Turismo Rural',
    description: 'Ecosistema de reservas y gestión automatizada para alojamientos rurales. Reducción de carga administrativa.',
    icon: 'bungalow',
    tag: 'PMS_EXT',
    category: 'Automatización'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Análisis',
    subtitle: '(Diagnóstico)',
    description: 'Evaluación de procesos actuales y detección de ineficiencias críticas.',
    icon: 'analytics'
  },
  {
    number: '02',
    title: 'Reglas',
    subtitle: '(Lógica de negocio)',
    description: 'Modelado de flujos y toma de decisiones estratégicas basadas en el negocio.',
    icon: 'rule'
  },
  {
    number: '03',
    title: 'Construcción',
    subtitle: '(Desarrollo y automatización)',
    description: 'Implementación técnica modular con integración de herramientas de IA.',
    icon: 'terminal'
  },
  {
    number: '04',
    title: 'Evolución',
    subtitle: '(Mejora continua)',
    description: 'Mantenimiento adaptativo y escalado del sistema según el crecimiento real.',
    icon: 'query_stats'
  }
];

export const INSTITUTIONAL_PROJECTS: InstitutionalProject[] = [
  {
    title: 'Málaga es Provincia',
    description: 'Implementación de arquitecturas de información y servicios digitales para la cohesión territorial a escala provincial.',
    tag: 'Administración Pública'
  },
  {
    title: 'Carta Verde',
    description: 'Digitalización de protocolos de sostenibilidad y cumplimiento normativo en procesos industriales críticos.',
    tag: 'Gestión Sostenible'
  }
];
