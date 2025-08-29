import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    setor: "",
    funcionarios: "",
    assunto: "",
    mensagem: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log("Formulário enviado:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(43) 92000 - 6786",
      description: "Segunda à sexta, 8h às 18h"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@wolfconsultoria.com.br",
      description: "Resposta em até 2 horas úteis"
    },
    // {
    //   icon: MapPin,
    //   title: "Endereço",
    //   value: "São Paulo, SP",
    //   description: "Atendimento presencial e remoto"
    // },
    {
      icon: Clock,
      title: "Horário",
      value: "8h às 18h",
      description: "Segunda à sexta-feira"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-background">
        <Card className="w-full max-w-md border-accent/20">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Mensagem Enviada!</h2>
            <p className="text-muted-foreground mb-6">
              Obrigado pelo seu contato. Nossa equipe entrará em contato em breve.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
              className="w-full"
            >
              Enviar Nova Mensagem
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
              Entre em <span className="text-accent">Contato</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90">
              Estamos prontos para transformar a gestão financeira da sua empresa
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Como podemos ajudar?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Escolha a forma mais conveniente para entrar em contato conosco
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <info.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-accent font-medium mb-1">{info.value}</p>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Envie sua mensagem
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Preencha o formulário ao lado e nossa equipe entrará em contato em até 2 horas úteis. 
                Ou se preferir, utilize um dos canais de contato direto.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Consultoria gratuita de 30 minutos</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Análise personalizada do seu negócio</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Proposta comercial sob medida</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
                <h3 className="font-semibold text-foreground mb-2">WhatsApp Direto</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Para atendimento imediato, fale conosco pelo WhatsApp
                </p>
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Conversar no WhatsApp
                </Button>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <Card className="border-border">
                <CardContent className="p-8">
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
                      <Label htmlFor="email">E-mail *</Label>
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
                        <Label htmlFor="setor">Setor</Label>
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
                            <SelectItem value="outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="funcionarios">Número de funcionários</Label>
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

                    <div>
                      <Label htmlFor="assunto">Assunto</Label>
                      <Select value={formData.assunto} onValueChange={(value) => handleChange("assunto", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Como podemos ajudar?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Demonstração do Meu Gestor</SelectItem>
                          <SelectItem value="analiseDados">Análise de Dados</SelectItem>
                          <SelectItem value="webEIntegracoes">Desenvolvimento WEB e Integrações</SelectItem>
                          <SelectItem value="erpOperacional">ERP Operacional</SelectItem>
                          <SelectItem value="erpGestao">ERP Gestão</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <Textarea
                        id="mensagem"
                        rows={4}
                        value={formData.mensagem}
                        onChange={(e) => handleChange("mensagem", e.target.value)}
                        placeholder="Conte-nos mais sobre seu desafio ou necessidade..."
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar este formulário, você concorda em receber comunicações da WOLF. 
                      Seus dados serão tratados conforme nossa política de privacidade.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      {/*}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nossa Localização
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Estamos em São Paulo, mas atendemos empresas em todo o Brasil
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">São Paulo, SP</h3>
                <p className="text-muted-foreground">
                  Atendimento presencial e remoto para todo o Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}