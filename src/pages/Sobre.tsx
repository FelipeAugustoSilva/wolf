import { Shield, Target, TrendingUp, Users, Eye, Handshake, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-consulting.jpg";

export default function Sobre() {
  const values = [
    {
      icon: Shield,
      title: "Transparência",
      description: "Comunicação clara e dados confiáveis para total visibilidade do seu negócio."
    },
    {
      icon: TrendingUp,
      title: "Inovação Contínua", 
      description: "Evoluímos constantemente para entregar mais valor e simplicidade às suas operações."
    },
    {
      icon: Target,
      title: "Foco no Cliente",
      description: "Soluções sob medida que geram impacto real e resultados mensuráveis."
    },
    {
      icon: CheckCircle,
      title: "Precisão",
      description: "Informações seguras e úteis para decisões rápidas e assertivas."
    },
    {
      icon: Handshake,
      title: "Parceria e Confiança",
      description: "Caminhamos lado a lado com você em sua jornada de crescimento."
    },
    {
      icon: Users,
      title: "Acessibilidade",
      description: "Tecnologia de gestão para todos os portes de empresa."
    },
    {
      icon: Eye,
      title: "Sustentabilidade",
      description: "Crescimento sólido e de longo prazo para seu negócio."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Sobre a <span className="text-accent">WOLF</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90">
              Transformamos dados em decisões.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Proposta */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Nossa Proposta
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Na WOLF, acreditamos que cada empreendedor merece ter o controle real do seu negócio — 
                e não apenas um amontoado de números difíceis de interpretar.
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Por isso, unimos tecnologia inteligente e consultoria estratégica para oferecer uma 
                gestão simples, visual e precisa. Com nossas soluções, você tem na palma da mão 
                informações confiáveis sobre receitas, custos, margens, indicadores, equipe e projeções, 
                podendo decidir com segurança e agilidade.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src={teamImage}
                alt="Equipe WOLF"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Missão e Visão
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Empoderar pequenas e médias empresas com tecnologia e inteligência financeira, 
                  transformando dados em decisões estratégicas e sustentáveis para garantir 
                  crescimento com segurança.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Visão</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser reconhecida como a principal parceira estratégica das empresas brasileiras, 
                  unindo tecnologia intuitiva, consultoria de alto nível e inteligência de dados 
                  para simplificar a gestão e maximizar resultados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nossos Valores
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Os princípios que guiam todas as nossas decisões e relacionamentos.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mensagem de Impacto */}
      <section className="py-24 bg-accent">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A WOLF não é apenas um software.
          </h2>
          <p className="mt-6 text-xl leading-8 text-white/90">
            É a inteligência que faltava para o seu negócio crescer.
          </p>
        </div>
      </section>
    </div>
  );
}