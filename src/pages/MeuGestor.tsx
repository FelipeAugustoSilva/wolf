import { ArrowRight, BarChart3, TrendingUp, DollarSign, Users, Target, Brain, Shield, Smartphone, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dashboardImage from "@/assets/dashboard-mockup.jpg";

export default function MeuGestor() {
  const modules = [
    {
      icon: BarChart3,
      title: "Dashboard Resumo",
      description: "KPIs e visão geral do negócio em tempo real com métricas essenciais."
    },
    {
      icon: TrendingUp,
      title: "Análise de Margens",
      description: "Comparativo detalhado por produto e segmento de mercado."
    },
    {
      icon: DollarSign,
      title: "Orçamento Geral",
      description: "Controle completo entre planejado vs. realizado com alertas automáticos."
    },
    {
      icon: Target,
      title: "Indicadores Financeiros",
      description: "Liquidez, endividamento, valuation e outros indicadores críticos."
    },
    {
      icon: Users,
      title: "Gestão de Equipe",
      description: "Custos, rotatividade, absenteísmo e produtividade da equipe."
    },
    {
      icon: Brain,
      title: "Projeção de Cenários",
      description: "Simulação de decisões e impactos com inteligência artificial."
    }
  ];

  const benefits = [
    "Redução de custos com decisões baseadas em dados",
    "Mais clareza e previsibilidade financeira",
    "Suporte humano aliado à tecnologia",
    "Mobilidade e acesso remoto seguro",
    "Relatórios automatizados personalizados",
    "Integração com sistemas existentes"
  ];

  const testimonials = [
    {
      name: "Carlos Eduardo",
      role: "CEO",
      company: "Metalúrgica São Paulo",
      quote: "O Meu Gestor nos deu uma visão 360° do negócio. Aumentamos nossa margem em 25% no primeiro ano.",
      video: true
    },
    {
      name: "Patricia Lima",
      role: "Diretora Financeira",
      company: "Rede Alimenta+",
      quote: "Conseguimos identificar gargalos que custavam R$ 2M por ano. O ROI foi imediato.",
      video: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-accent">Meu Gestor</span> – Sua empresa sob controle, em qualquer lugar
              </h1>
              <p className="mt-6 text-xl leading-8 text-white/90">
                Gestão financeira, indicadores e projeções em um só lugar,
                com apoio de consultores especializados.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Agendar demonstração

                </Button>
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6 border-white text-primary">
                  Conhecer planos
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <img
                  src={dashboardImage}
                  alt="Interface do Meu Gestor em notebook e celular"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Como funciona o Meu Gestor
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Portal web intuitivo + consultoria especializada = gestão financeira de alto nível
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Integração de Dados
              </h3>
              <p className="text-muted-foreground">
                Conectamos com seus sistemas existentes ou importamos dados de forma segura e automatizada.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Análise Inteligente
              </h3>
              <p className="text-muted-foreground">
                Nossos algoritmos processam informações e geram insights acionáveis em tempo real.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Suporte Especializado
              </h3>
              <p className="text-muted-foreground">
                Consultores experientes interpretam dados e orientam decisões estratégicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Módulos do Meu Gestor
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Cada módulo foi desenvolvido para atender necessidades específicas da gestão empresarial.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <module.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {module.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Benefícios para o seu negócio
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Transforme dados em vantagem competitiva com tecnologia de ponta e expertise humana.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              {/*<div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Segurança Bancária</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">App Mobile</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Tempo Real</span>
                </div>
              </div>*/}
            </div>
            <div className="mt-12 lg:mt-0 space-y-6">
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Redução no tempo de análise financeira</div>
                </CardContent>
              </Card>
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">4.8x</div>
                  <div className="text-sm text-muted-foreground">Mais rápido que planilhas tradicionais</div>
                </CardContent>
              </Card>
              {/* <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">ROI</div>
                  <div className="text-sm text-muted-foreground">Retorno médio de 300% em 12 meses</div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>


      {/*}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Casos de sucesso reais
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Empresas que transformaram sua gestão financeira com o Meu Gestor.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-muted-foreground mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-6 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-accent">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                    {testimonial.video && (
                      <Button variant="outline" size="sm">
                        Ver vídeo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-8">
              Empresas que confiam no Meu Gestor
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="h-12 w-24 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-semibold">EMPRESA A</span>
              </div>
              <div className="h-12 w-24 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-semibold">EMPRESA B</span>
              </div>
              <div className="h-12 w-24 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-semibold">EMPRESA C</span>
              </div>
              <div className="h-12 w-24 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-semibold">EMPRESA D</span>
              </div>
            </div>
          </div>
        </div>
      </section>
        */}
      {/* CTA Final */}
      <section className="py-24 bg-accent">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Não administre no escuro. Tome decisões com base em dados e consultoria especializada.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Teste o Meu Gestor por 30 dias gratuitamente e comprove os resultados.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-accent">
              Agendar demonstração
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80">
            Sem compromisso • Cancelamento a qualquer momento • Suporte incluso
          </p>
        </div>
      </section>

    </div>
  );
}