import { ArrowRight, TrendingUp, Users, BarChart3, Code, Database, GitBranch, Lightbulb, Target, PieChart, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Servicos() {
  /*
  const services = [
    {
      icon: BarChart3,
      title: "Análise de Dados",
      description: "Transformação de dados brutos em insights estratégicos para tomada de decisões inteligentes e baseadas em evidências.",
      features: [
        "Business Intelligence avançado",
        "Dashboards interativos personalizados",
        "Análise preditiva e forecasting",
        "KPIs e métricas de performance",
        "Relatórios automatizados"
      ],
      ideal: "Essencial para empresas que querem transformar dados em vantagem competitiva."
    },
    {
      icon: Code,
      title: "Desenvolvimento WEB e Integrações",
      description: "Soluções web completas com sistemas integrados e conectividade total entre plataformas para maximizar eficiência operacional.",
      features: [
        "Sistemas web customizados",
        "APIs e webservices",
        // "E-commerce e marketplaces",
        "Integração entre sistemas",
        "Progressive Web Apps (PWA)",
        "Sincronização de dados",
        "Automação de processos"
      ],
      ideal: "Perfeito para empresas que buscam modernizar processos digitais com total integração."
    },
    {
      icon: Database,
      title: "ERP Operacional",
      description: "Sistema integrado para gerenciamento de operações do dia a dia, otimizando processos e aumentando a produtividade.",
      features: [
        "Gestão de estoque e almoxarifado",
        "Controle de produção",
        "Gestão de compras e vendas",
        "Controle de qualidade",
        "Rastreabilidade completa"
      ],
      ideal: "Ideal para empresas que precisam organizar e automatizar operações."
    },
    {
      icon: TrendingUp,
      title: "ERP de Gestão",
      description: "Plataforma completa para gestão estratégica com módulos financeiros, contábeis e de recursos humanos integrados.",
      features: [
        "Gestão financeira completa",
        "Controle contábil e fiscal",
        "Recursos humanos e folha",
        "Planejamento estratégico",
        "Análise de performance"
      ],
      ideal: "Fundamental para empresas que querem centralizar toda a gestão."
    }
  ];
  */
  const services = [
    {
      icon: BarChart3,
      title: "Inteligência de Decisão",
      description: "Transformação de dados brutos em insights estratégicos para tomada de decisões inteligentes e baseadas em evidências.",
      features: [
        "Business Intelligence avançado",
        "Dashboards interativos personalizados",
        "Análise preditiva e forecasting",
        "KPIs e métricas de performance",
        "Relatórios automatizados"
      ],
      ideal: "Essencial para empresas que querem transformar dados em vantagem competitiva."
    },
    {
      icon: Code,
      title: "Arquitetura Digital Sob Medida",
      description: "Soluções web completas com sistemas integrados e conectividade total entre plataformas para maximizar eficiência operacional.",
      features: [
        "Sistemas web customizados",
        "APIs e webservices",
        "Integração entre sistemas",
        "Progressive Web Apps (PWA)",
        "Sincronização de dados",
        "Automação de processos"
      ],
      ideal: "Perfeito para empresas que buscam modernizar processos digitais com total integração."
    },
    {
      icon: PieChart,
      title: "Painéis de Performance Executiva",
      description: "Consolidação de dados em painéis visuais dinâmicos e automatização de relatórios que economizam tempo e reduzem erros manuais.",
      features: [
        "Dashboards 100% personalizados",
        "Conexão com múltiplas fontes de dados",
        "Atualização automática em tempo real",
        "Relatórios compartilháveis e seguros",
        "Automação de planilhas repetitivas"
      ],
      ideal: "Indicado para empresas que querem clareza total em seus números e processos."
    },
    {
      icon: Cloud,
      title: "Automação Inteligente de Operações",
      description: "Eliminação de tarefas repetitivas e integração de sistemas para ganho de eficiência e redução de custos operacionais.",
      features: [
        "Automação de rotinas manuais",
        "Integração entre bancos de dados e sistemas",
        "Conexão entre CRM, ERP e plataformas web",
        "Notificações e alertas automáticos",
        "Redução de erros operacionais"
      ],
      ideal: "Perfeito para empresas que querem escalar produtividade sem aumentar a equipe."
    }
  ];


  const process = [
    {
      step: "1",
      title: "Diagnóstico Inicial",
      description: "Análise completa da situação atual da sua empresa através de dados financeiros e operacionais."
    },
    {
      step: "2",
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de um plano customizado com objetivos claros e metas mensuráveis."
    },
    {
      step: "3",
      title: "Implementação",
      description: "Execução do plano com acompanhamento próximo e ajustes conforme necessário."
    },
    {
      step: "4",
      title: "Monitoramento Contínuo",
      description: "Acompanhamento dos resultados e otimizações constantes para garantir o sucesso."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Nossos <span className="text-accent">Serviços</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90">
              Soluções completas em consultoria financeira para transformar a gestão do seu negócio
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link to="/contato">
                  Agendar Consultoria Gratuita

                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nossos Serviços Principais
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Cada serviço é desenhado para resolver desafios específicos da gestão empresarial
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">O que inclui:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-medium text-accent">{service.ideal}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Processo */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nosso Processo de Trabalho
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Uma metodologia testada e aprovada para garantir resultados consistentes
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 items-center justify-items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Por que escolher a WOLF?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Combinamos a experiência humana com tecnologia de ponta para entregar resultados excepcionais.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Lightbulb className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Consultoria + Tecnologia</h3>
                    <p className="text-sm text-muted-foreground">Únicos no mercado a oferecer consultoria integrada com plataforma própria.</p>
                  </div>
                </div>
                {/*<div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Resultados Comprovados</h3>
                    <p className="text-sm text-muted-foreground">Mais de 200 empresas atendidas com ROI médio de 300% em 12 meses.</p>
                  </div>
                </div>*/}
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Suporte Personalizado</h3>
                    <p className="text-sm text-muted-foreground">Acompanhamento próximo com consultores dedicados ao seu sucesso.</p>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className="mt-12 lg:mt-0">
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">9 anos</div>
                  <div className="text-sm text-muted-foreground mb-6">de experiência no mercado</div>
                  
                  <div className="text-3xl font-bold text-accent mb-2">200+</div>
                  <div className="text-sm text-muted-foreground mb-6">empresas transformadas</div>
                  
                  <div className="text-3xl font-bold text-accent mb-2">R$ 50M+</div>
                  <div className="text-sm text-muted-foreground">em valor agregado aos clientes</div>
                </CardContent>
              </Card>
            </div>*/}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-accent">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto para transformar sua gestão financeira?
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Agende uma consultoria gratuita e descubra como podemos acelerar o crescimento do seu negócio.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
              {/* <Link to="/demo">
                Agendar Consultoria Gratuita

              </Link> */}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-accent" asChild>
              <Link to="/contato">
                Falar com especialista
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}