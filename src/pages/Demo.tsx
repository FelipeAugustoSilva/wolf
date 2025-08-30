import { useState } from "react";
import { Calendar, Clock, User, Building, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Demo() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    setor: "",
    funcionarios: "",
    dataPreferencia: "",
    horarioPreferencia: "",
    tipoDemo: "",
    observacoes: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demonstração agendada:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const benefits = [
    "Demonstração personalizada do Meu Gestor",
    "Análise gratuita dos seus dados financeiros",
    "Identificação de oportunidades de melhoria",
    "Proposta comercial customizada",
    "Consultoria inicial sem custo"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-background">
        <Card className="w-full max-w-md border-accent/20">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Demonstração Agendada!</h2>
            <p className="text-muted-foreground mb-6">
              Obrigado! Nossa equipe entrará em contato para confirmar sua demonstração em breve.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <p>✓ Você receberá um e-mail de confirmação</p>
              <p>✓ Link da reunião será enviado 1 dia antes</p>
              <p>✓ Demonstração personalizada de 45 minutos</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
              className="w-full"
            >
              Agendar Nova Demonstração
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Agende sua <span className="text-accent">Demonstração</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90">
              Veja na prática como o Meu Gestor pode transformar a gestão financeira da sua empresa
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm">45 minutos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">Online ou presencial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">100% gratuito</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai receber */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                O que você vai receber
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Uma demonstração completa e personalizada para suas necessidades específicas.
              </p>
              <div className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
                <h3 className="font-semibold text-foreground mb-2">Demonstração Personalizada</h3>
                <p className="text-sm text-muted-foreground">
                  Não é uma apresentação genérica. Nossa demonstração é customizada para seu 
                  setor e desafios específicos, usando dados reais similares ao seu negócio.
                </p>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Agende agora sua demonstração
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Preencha os dados abaixo e nossa equipe entrará em contato para agendar.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="nome">Nome completo *</Label>
                        <Input
                          id="nome"
                          type="text"
                          required
                          value={formData.nome}
                          onChange={(e) => handleChange("nome", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefone">Telefone *</Label>
                        <Input
                          id="telefone"
                          type="tel"
                          required
                          value={formData.telefone}
                          onChange={(e) => handleChange("telefone", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail corporativo *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="empresa">Nome da empresa *</Label>
                        <Input
                          id="empresa"
                          type="text"
                          required
                          value={formData.empresa}
                          onChange={(e) => handleChange("empresa", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="setor">Setor *</Label>
                        <Select value={formData.setor} onValueChange={(value) => handleChange("setor", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Selecione o setor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="industria">Indústria</SelectItem>
                            <SelectItem value="varejo">Varejo</SelectItem>
                            <SelectItem value="tecnologia">Tecnologia</SelectItem>
                            <SelectItem value="servicos">Serviços</SelectItem>
                            <SelectItem value="construcao">Construção</SelectItem>
                            <SelectItem value="saude">Saúde</SelectItem>
                            <SelectItem value="educacao">Educação</SelectItem>
                            <SelectItem value="agronegocio">Agronegócio</SelectItem>
                            <SelectItem value="outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="funcionarios">Número de funcionários *</Label>
                      <Select value={formData.funcionarios} onValueChange={(value) => handleChange("funcionarios", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecione o porte" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1 a 10 funcionários</SelectItem>
                          <SelectItem value="11-50">11 a 50 funcionários</SelectItem>
                          <SelectItem value="51-200">51 a 200 funcionários</SelectItem>
                          <SelectItem value="201-500">201 a 500 funcionários</SelectItem>
                          <SelectItem value="500+">Mais de 500 funcionários</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="dataPreferencia">Data preferida</Label>
                        <Input
                          id="dataPreferencia"
                          type="date"
                          value={formData.dataPreferencia}
                          onChange={(e) => handleChange("dataPreferencia", e.target.value)}
                          className="mt-1"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="horarioPreferencia">Horário preferido</Label>
                        <Select value={formData.horarioPreferencia} onValueChange={(value) => handleChange("horarioPreferencia", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Selecione o horário" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="manha">Manhã (9h às 12h)</SelectItem>
                            <SelectItem value="tarde">Tarde (14h às 17h)</SelectItem>
                            <SelectItem value="flexivel">Horário flexível</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="tipoDemo">Tipo de demonstração</Label>
                      <Select value={formData.tipoDemo} onValueChange={(value) => handleChange("tipoDemo", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Como prefere receber a demonstração?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">Online (Google Meet/Zoom)</SelectItem>
                          <SelectItem value="presencial">Presencial (São Paulo)</SelectItem>
                          <SelectItem value="ambos">Sem preferência</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="observacoes">Observações</Label>
                      <Textarea
                        id="observacoes"
                        rows={3}
                        value={formData.observacoes}
                        onChange={(e) => handleChange("observacoes", e.target.value)}
                        placeholder="Conte-nos sobre seus principais desafios na gestão financeira..."
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar Demonstração Gratuita
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Demonstração 100% gratuita • Sem compromisso • Duração: 45 minutos
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Quanto tempo dura?</h3>
                <p className="text-sm text-muted-foreground">
                  A demonstração dura aproximadamente 45 minutos, incluindo tempo para perguntas.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">É realmente gratuito?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim, completamente gratuito e sem qualquer compromisso de compra.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Posso levar minha equipe?</h3>
                <p className="text-sm text-muted-foreground">
                  Claro! Incentivamos a participação da equipe financeira e de gestão.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-accent">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto para ver o Meu Gestor em ação?
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Não perca tempo com planilhas desatualizadas. Veja como ter controle total do seu negócio.
          </p>
          <div className="mt-10">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('nome')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agendar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}