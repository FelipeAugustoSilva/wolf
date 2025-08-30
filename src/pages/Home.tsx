import { ArrowRight, TrendingUp, BarChart3, Users, Shield, Smartphone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-dashboard.jpg";
import teamImage from "@/assets/team-consulting.jpg";

export default function Home() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Consultoria Financeira Especializada",
      description: "Análise profunda e estratégias personalizadas para maximizar seus resultados."
    },
    {
      icon: BarChart3,
      title: "Plataforma Inteligente de Gestão",
      description: "Tecnologia de ponta para monitorar e controlar todos os aspectos do seu negócio."
    },
    {
      icon: Clock,
      title: "Relatórios e Projeções em Tempo Real",
      description: "Dashboards atualizados instantaneamente para decisões rápidas e assertivas."
    }
  ];

  const testimonials = [
    {
      quote: "Com a WOLF conseguimos reduzir custos em 30% e aumentar nossa margem de lucro significativamente.",
      author: "Maria Silva",
      company: "TechStart Ltda.",
      role: "CEO"
    },
    {
      quote: "O Meu Gestor transformou nossa visão financeira. Agora temos dados precisos para cada decisão.",
      author: "João Santos",
      company: "Indústria Alpha",
      role: "CFO"
    },
    {
      quote: "Suporte excepcional e resultados que superaram nossas expectativas. Recomendo fortemente!",
      author: "Ana Costa",
      company: "Comercial Beta",
      role: "Diretora Financeira"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Transformamos números em{" "}
              <span className="text-accent">decisões estratégicas</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 sm:text-xl">
              Consultoria financeira especializada com a plataforma Meu Gestor.
              Controle total, insights precisos e crescimento sustentável para o seu negócio.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/*<Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Quero otimizar minha gestão
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>*/}
              <Link to="/contato">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-white text-primary"
                >
                  Agendar demonstração
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Por que escolher a WOLF?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Combinamos experiência em consultoria com tecnologia de ponta para entregar resultados excepcionais.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meu Gestor CTA Section 
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Conheça o <span className="text-accent">Meu Gestor</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Nossa plataforma proprietária que revoluciona a gestão financeira empresarial.
                Dashboards intuitivos, análises precisas e suporte de consultores especializados.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
                <Button size="lg">
                  Explorar Meu Gestor

                </Button>
                <Button variant="outline" size="lg">
                  Ver demonstração
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Versão Web Mobile</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Suporte 24/7</span>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src={teamImage}
                alt="Equipe WOLF analisando dados"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O que nossos clientes dizem
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Resultados reais de empresas que transformaram sua gestão financeira conosco.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-muted-foreground mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-6">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-accent">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      <section className="py-24 bg-accent">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto para transformar sua gestão financeira?
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Junte-se a centenas de empresas que já otimizaram seus resultados com a WOLF.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/*<Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Começar agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>*/}

            <Link to="/contato">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-white text-accent"
              >
                Falar com especialista
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}