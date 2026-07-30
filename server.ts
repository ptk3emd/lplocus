import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json());

// Pricing configurations & Kiwify Checkout links
const PLANS_CONFIG = {
  mensal: {
    id: "mensal",
    name: "Plano Mensal",
    periodName: "mensal",
    intervalMonths: 1,
    standardPrice: 25,
    firstMonthPrice: 20,
    discountAmount: 5,
    checkoutUrl: "https://pay.kiwify.com.br/1ri4Ef0",
    badge: "Economize R$ 5 no 1º mês",
    features: [
      "Acesso irrestrito a todas as apostilas",
      "Banco de questões e resumos ilimitados",
      "Modo offline parcial no celular/laptop",
      "Sincronização em tempo real de notas",
      "Sem fidelidade, cancele quando quiser"
    ]
  },
  trimestral: {
    id: "trimestral",
    name: "Plano Trimestral",
    periodName: "trimestral",
    intervalMonths: 3,
    standardPrice: 50,
    firstMonthPrice: 40,
    discountAmount: 10,
    checkoutUrl: "https://pay.kiwify.com.br/bJkrKJg",
    badge: "Mais Popular — R$ 40 na 1ª cobrança",
    popular: true,
    features: [
      "Tudo do plano mensal",
      "Primeira cobrança por apenas R$ 40 (depois R$ 50/trimestre)",
      "Equivalente a ~R$ 16,66/mês",
      "Economia garantida em cada ciclo",
      "Acesso imediato ao material de plantão"
    ]
  },
  semestral: {
    id: "semestral",
    name: "Plano Semestral",
    periodName: "semestral",
    intervalMonths: 6,
    standardPrice: 90,
    firstMonthPrice: 70,
    discountAmount: 20,
    checkoutUrl: "https://pay.kiwify.com.br/V8p0Cgx",
    badge: "Maior Economia — R$ 70 no 1º ciclo",
    features: [
      "Tudo dos outros planos",
      "1º ciclo com R$ 20 OFF (apenas R$ 70, depois R$ 90/semestre)",
      "Equivalente a R$ 15,00/mês",
      "Ideal para o semestre letivo completo",
      "Garantia estendida e suporte prioritário"
    ]
  }
};

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "Locus Medicina Server", timestamp: new Date().toISOString() });
});

// API: Generate Email Templates for Billing and Renewal Notifications
app.post("/api/notifications/templates", (req, res) => {
  const { userEmail = "estudante@medicina.br", userName = "Futuro(a) Médico(a)", planId = "trimestral" } = req.body;
  const plan = PLANS_CONFIG[planId as keyof typeof PLANS_CONFIG] || PLANS_CONFIG.trimestral;

  const nextRenewalDate = new Date();
  nextRenewalDate.setMonth(nextRenewalDate.getMonth() + plan.intervalMonths);
  const formattedNextDate = nextRenewalDate.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

  const templates = {
    receipt: {
      subject: `[Locus Medicina] Confirmação de Assinatura — ${plan.name}`,
      html: `
        <div style="font-family: 'Urbanist', -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #ececf2; border-radius: 16px; padding: 32px; color: #212121;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="display: inline-block; background: #FCFD76; border-radius: 20px; padding: 6px 16px; font-weight: 800; font-size: 14px; color: #212121;">
              Locus Medicina 🩺
            </div>
            <h2 style="font-size: 24px; font-weight: 800; margin-top: 16px; color: #212121;">Bem-vindo(a) ao Locus, ${userName}!</h2>
            <p style="color: #4b4b50; font-size: 15px;">Sua jornada de estudos médicos sem complicação começa agora.</p>
          </div>

          <div style="background: #fbfbfd; border: 1px solid #ececf2; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <h3 style="font-size: 16px; font-weight: 800; margin-top: 0; color: #212121;">Resumo da Assinatura</h3>
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6f6f78;">Plano Escolhido:</td>
                <td style="padding: 8px 0; text-align: right; font-weight: 700;">${plan.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6f6f78;">Valor da 1ª Cobrança:</td>
                <td style="padding: 8px 0; text-align: right; font-weight: 800; color: #212121;">R$ ${plan.firstMonthPrice},00 <span style="background: #FCFD76; font-size: 11px; padding: 2px 6px; border-radius: 4px;">R$ ${plan.discountAmount} OFF</span></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6f6f78;">Próxima Renovação (${plan.periodName}):</td>
                <td style="padding: 8px 0; text-align: right; font-weight: 700;">${formattedNextDate} (R$ ${plan.standardPrice},00)</td>
              </tr>
            </table>
          </div>

          <div style="background: #e3efe6; border-radius: 12px; padding: 16px; margin-bottom: 24px; color: #212121; font-size: 14px;">
            ✅ <strong>Acesso Imediato Ativado:</strong> Seu login com o e-mail <strong>${userEmail}</strong> já está configurado. Abra o app no celular ou notebook para continuar seus estudos de onde parou.
          </div>

          <div style="text-align: center; margin-top: 32px; font-size: 12px; color: #6f6f78; border-top: 1px solid #ececf2; pt-16px;">
            <p>Locus Medicina — De estudantes de medicina para estudantes de medicina.<br/>Dúvidas? Responda a este e-mail para falar diretamente com nosso suporte.</p>
          </div>
        </div>
      `
    },
    renewalNotice: {
      subject: `[Locus Medicina] Lembrete de Renovação Automática — ${plan.name}`,
      html: `
        <div style="font-family: 'Urbanist', -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #ececf2; border-radius: 16px; padding: 32px; color: #212121;">
          <div style="background: #D7D7F4; border-radius: 12px; padding: 12px 16px; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #212121; text-align: center; margin-bottom: 20px;">
            Aviso Transparente de Cobrança
          </div>
          <h2 style="font-size: 22px; font-weight: 800; margin-top: 0; color: #212121;">Olá, ${userName}</h2>
          <p style="color: #4b4b50; font-size: 15px; line-height: 1.6;">
            Lembrando que a renovação do seu <strong>${plan.name}</strong> ocorrerá em breve, no dia <strong>${formattedNextDate}</strong> no valor padrão de <strong>R$ ${plan.standardPrice},00</strong>.
          </p>

          <div style="background: #f4f4f7; border: 1px dashed #c5c5ef; border-radius: 12px; padding: 18px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #212121;">
              📌 <strong>Sem surpresas:</strong> Sua renovação garante acesso ininterrupto ao seu histórico de resumos, estatísticas no heatmap e banco de questões atualizado.
            </p>
          </div>

          <p style="color: #6f6f78; font-size: 13px;">Caso deseje alterar seus dados de cobrança ou gerenciar sua assinatura no Kiwify, você pode fazer isso a qualquer momento através do seu e-mail cadastrado (<strong>${userEmail}</strong>).</p>

          <div style="text-align: center; margin-top: 28px; pt-16px; border-top: 1px solid #ececf2; font-size: 12px; color: #6f6f78;">
            Locus Medicina — Foco no seu aprendizado clínico.
          </div>
        </div>
      `
    }
  };

  res.json({ templates });
});

// Serve frontend in production or via Vite in development
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Locus Medicina] Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
