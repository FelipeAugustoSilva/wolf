import { TrendingUp, Award, Target, BarChart3, Percent, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Cases() {
  const cases = [
    {
      company: "Metalúrgica São Paulo",
      sector: "Indústria",
      size: "50 funcionários",
      challenge: "Alto custo operacional e baixa margem de lucro",
      solution: "Implementação do Meu Gestor + consultoria de custos",
      results: [
        { metric: "Redução de custos", value: "30%", icon: TrendingUp },
        { metric: "Aumento da margem", value: "25%", icon: Percent },
        { metric: "ROI", value: "400%", icon: Award }
      ],
      testimonial: "Com a WOLF conseguimos identificar gargalos que custavam R$ 2M por ano. O retorno foi imediato.",
      author: "Carlos Eduardo",
      role: "CEO"
    },
    {
      company: "Rede Alimenta+", 
      sector: "Varejo",
      size: "120 funcionários",
      challenge: "Gestão descentralizada e falta de controle financeiro",
      solution: "Plataforma Meu Gestor com módulo de gestão de equipes",
      results: [
        { metric: "Controle de estoque", value: "95%", icon: Target },
        { metric: "Redução de perdas", value: "40%", icon: TrendingUp },
        { metric: "Economia anual", value: "R$ 1.2M", icon: Award }
      ],
      testimonial: "O Meu Gestor nos deu visibilidade total das operações. Nunca tivemos tanto controle sobre o negócio.",
      author: "Patricia Lima",
      role: "Diretora Financeira"
    },
    {
      company: "TechStart Ltda",
      sector: "Tecnologia", 
      size: "25 funcionários",
      challenge: "Crescimento rápido sem estrutura financeira adequada",
      solution: "Consultoria financeira + planejamento orçamentário",
      results: [
        { metric: "Crescimento organizado", value: "200%", icon: BarChart3 },
        { metric: "Previsibilidade", value: "90%", icon: Target },
        { metric: "Tempo de análise", value: "-80%", icon: TrendingUp }
      ],
      testimonial: "A WOLF nos ajudou a estruturar o crescimento. Hoje temos previsibilidade e segurança nas decisões.",
      author: "Ana Costa",
      role: "COO"
    }
  ];

  const metrics = [
    {
      value: "200+",
      label: "Empresas transformadas",
      icon: Award
    },
    {
      value: "R$ 50M+",
      label: "Valor agregado",
      icon: TrendingUp
    },
    {
      value: "300%",
      label: "ROI médio em 12 meses",
      icon: Percent
    },
    {
      value: "98%",
      label: "Satisfação dos clientes",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cases de <span className="text-accent">Sucesso</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90">
              Resultados reais de empresas que transformaram sua gestão financeira conosco
            </p>
          </div>
        </div>
      </section>

      {/* Métricas Principais */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nossos Resultados
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Números que comprovam o impacto das nossas soluções
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <metric.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Detalhados */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Histórias de Transformação
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Conheça como diferentes empresas superaram seus desafios
            </p>
          </div>
          <div className="mx-auto mt-16 space-y-16">
            {cases.map((caseStudy, index) => (
              <Card key={index} className="border-border overflow-hidden">
                <CardContent className="p-8 lg:p-12">
                  <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    {/* Informações da Empresa */}
                    <div className="lg:col-span-1">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {caseStudy.company}
                        </h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p><span className="font-medium">Setor:</span> {caseStudy.sector}</p>
                          <p><span className="font-medium">Porte:</span> {caseStudy.size}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-2">Desafio</h4>
                        <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solução</h4>
                        <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                      </div>
                    </div>

                    {/* Resultados */}
                    <div className="mt-8 lg:mt-0 lg:col-span-1">
                      <h4 className="font-semibold text-foreground mb-4">Resultados Alcançados</h4>
                      <div className="space-y-4">
                        {caseStudy.results.map((result, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                              <result.icon className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                              <div className="text-lg font-bold text-accent">{result.value}</div>
                              <div className="text-xs text-muted-foreground">{result.metric}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Depoimento */}
                    <div className="mt-8 lg:mt-0 lg:col-span-1">
                      <h4 className="font-semibold text-foreground mb-4">Depoimento</h4>
                      <blockquote className="text-muted-foreground mb-4 italic">
                        "{caseStudy.testimonial}"
                      </blockquote>
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground">{caseStudy.author}</p>
                        <p className="text-sm text-accent">{caseStudy.role}</p>
                        <p className="text-sm text-muted-foreground">{caseStudy.company}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setores Atendidos */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Setores Atendidos
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Nossa experiência abrange diversos segmentos do mercado
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Indústria",
              "Varejo",
              "Tecnologia", 
              "Serviços",
              "Construção",
              "Saúde",
              "Educação",
              "Agronegócio",
              "Logística",
              "Alimentação",
              "Consultoria",
              "E-commerce"
            ].map((sector, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-3 h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-accent">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sua empresa pode ser o próximo case de sucesso
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Agende uma demonstração gratuita e descubra como transformar a gestão do seu negócio.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/demo">
                Quero ser um case de sucesso
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6 border-white text-accent" asChild>
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