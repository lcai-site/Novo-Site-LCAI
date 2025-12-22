
import React from 'react';
import { BarChart3, Settings, Bot, Share2, Database, ShieldCheck, Globe } from 'lucide-react';
import { Solution, Pilar, TechItem } from './types';

export const SOLUTIONS: Solution[] = [
  {
    id: '01',
    title: 'Tráfego Pago & Business Intelligence (BI)',
    description: 'Decisões baseadas em números, não em palpites.',
    icon: 'BarChart3',
    items: [
      'Tracking Avançado: Configuração profissional de Pixel, API de Conversões e parametrização de UTMs.',
      'Gestão de Mídia (Meta & Google): Criação e otimização focada em performance e lucro real.',
      'Dashboards de Decisão: Painéis claros para visualização de CPA, LTV e ROAS.'
    ]
  },
  {
    id: '02',
    title: 'Engenharia de Automação (n8n)',
    description: 'A máquina que roda nos bastidores.',
    icon: 'Settings',
    items: [
      'Fluxos de Integração: Conexão total entre Marketing e Vendas via CRM e planilhas.',
      'Sanitização de Dados: Uso de scripts exclusivos para limpar e validar bases de leads.',
      'Recuperação Automática: Sistemas inteligentes para recuperar carrinhos e leads inativos.'
    ]
  },
  {
    id: '03',
    title: 'Soluções com Inteligência Artificial',
    description: 'O futuro, aplicado hoje.',
    icon: 'Bot',
    items: [
      'Agentes Personalizados: IAs treinadas nos seus dados para insights estratégicos.',
      'Criação Assistida: IA Generativa para produção de criativos e copys persuasivas em escala.'
    ]
  },
  {
    id: '04',
    title: 'Social Media Estratégico',
    description: 'A vitrine que converte.',
    icon: 'Share2',
    items: [
      'Posicionamento de Marca: Gestão alinhada à estratégia de tráfego pago.',
      'Preparo de Terreno: Conteúdo desenhado para quebrar objeções e aquecer a audiência.'
    ]
  }
];

export const PILARS: Pilar[] = [
  {
    title: 'Inteligência de Dados & Rastreamento',
    description: 'Implementamos rastreamento avançado (Server-Side/API) para garantir que as plataformas recebam dados blindados. Quem tem a melhor informação vence.',
    icon: 'Database'
  },
  {
    title: 'Infraestrutura Proprietária (Self-Hosted)',
    description: 'Operamos com infraestrutura própria (n8n Self-Hosted). Isso garante privacidade total, estabilidade e escala ilimitada sem depender de terceiros.',
    icon: 'ShieldCheck'
  },
  {
    title: 'IA e Personalização Global',
    description: 'Desenvolvemos Agentes de IA e scripts que adaptam a comunicação da sua marca, garantindo relevância cultural no Brasil ou no exterior.',
    icon: 'Globe'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'Meta Ads', category: 'Tráfego' },
  { name: 'Google Ads', category: 'Tráfego' },
  { name: 'GA4', category: 'Dados' },
  { name: 'Looker Studio', category: 'Dados' },
  { name: 'n8n (Self-Hosted)', category: 'Automação' },
  { name: 'Webhooks', category: 'Backend' },
  { name: 'JSON', category: 'Backend' },
  { name: 'Docker', category: 'Backend' },
  { name: 'JavaScript', category: 'Dev' },
  { name: 'Google Apps Script', category: 'Dev' },
  { name: 'RegEx', category: 'Dev' },
  { name: 'Google AI Studio', category: 'IA' },
  { name: 'Perplexity', category: 'IA' },
  { name: 'MidJourney', category: 'IA' },
  { name: 'OpenAI', category: 'IA' }
];

export const IconMap: Record<string, React.ElementType> = {
  BarChart3,
  Settings,
  Bot,
  Share2,
  Database,
  ShieldCheck,
  Globe
};
