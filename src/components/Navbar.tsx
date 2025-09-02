import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Sobre a WOLF", href: "/sobre" },
    { name: "MeuGestor", href: "/meu-gestor" },
  { name: "Serviços", href: "/servicos" },
  { name: "Contato", href: "/contato" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Evita scroll do body quando o menu está aberto (mobile UX)
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* HEADER - z menor */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 border-b border-border z-40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-primary">WOLF</span>
              <span className="text-2xl font-light text-accent">  Technologies</span>
            </Link>
          </div>

          {/* Botão hamburguer */}
          <div className="flex lg:hidden">
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Links desktop */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium leading-6 transition-colors hover:text-accent",
                  location.pathname === item.href ? "text-accent" : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button variant="default" size="sm" asChild>
              <Link to="/contato">Agendar Demonstração</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* MENU MOBILE FORA DO HEADER */}
      {mobileMenuOpen && (
        <>
          {/* Overlay abaixo do painel, acima do site */}
          <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Painel */}
          <div
            id="mobile-menu"
            className="fixed inset-y-0 right-0 z-[60] w-full sm:max-w-sm bg-background h-screen overflow-y-auto px-6 py-6 ring-1 ring-border"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold text-primary">WOLF</span>
                <span className="text-xl font-light text-accent"> Technologies</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6">
              <nav className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 transition-colors hover:bg-secondary",
                        location.pathname === item.href ? "text-accent" : "text-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button variant="default" className="w-full" asChild>
                    <Link to="/contato" onClick={() => setMobileMenuOpen(false)}>
                      Agendar Demonstração
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
