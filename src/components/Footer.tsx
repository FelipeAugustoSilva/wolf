import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <span className="text-2xl font-bold">WOLF</span>
              <span className="text-2xl font-light text-accent"> Technologies</span>
            </div>
            <p className="text-sm leading-6 text-primary-foreground/80">
              Transformamos números em decisões estratégicas. Consultoria financeira especializada 
              com tecnologia de ponta para impulsionar o crescimento do seu negócio.
            </p>
            {/*}
            <div className="flex space-x-6">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            */}
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Navegação</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {[
                    { name: "Início", href: "/" },
                    { name: "Sobre a WOLF", href: "/sobre" },
                    { name: "Serviços", href: "/servicos" },
                    // { name: "Meu Gestor", href: "/meu-gestor" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-primary-foreground/80 hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Recursos</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {[
                    // { name: "Cases de Sucesso", href: "/cases" },
                    { name: "Contato", href: "/contato" },
                    { name: "Demonstração", href: "/demo" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-primary-foreground/80 hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Contato</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-accent" />
                    <span className="text-sm text-primary-foreground/80">(43) 92000-6786</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-accent" />
                    <span className="text-sm text-primary-foreground/80">contato@wolftech.app.br</span>
                  </li>
                  {/* <li className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-accent mt-0.5" />
                    <span className="text-sm text-primary-foreground/80">
                      São Paulo, SP<br />
                      Brasil
                    </span>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-primary-foreground/20 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-primary-foreground/60 text-center">
            &copy; 2025 WOLF Technologies. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>




  );
}