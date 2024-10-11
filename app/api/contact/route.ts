import type { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { firstName, lastName, email, content } = await req.json();
      if (!firstName || !lastName || !email || !content) {
        return new NextResponse(JSON.stringify({ message: "Missing fields" }), {
          status: 400,
        });
      }

      const embed = {
        title: "Nouveau message de contact",
        description: `Message de ${firstName} ${lastName} (${email}):\n${content}`,
        color: 3092790,
        fields: [
          {
            name: "Nom",
            value: `${firstName} ${lastName}`,
            inline: true,
          },
          {
            name: "Email",
            value: email,
            inline: true,
          },
          {
            name: "Contenu",
            value: content,
          },
        ],
        footer: {
          text: "Message envoyé depuis le formulaire de contact",
        },
      };

      const webhookUrl = process.env.WEBHOOK_URL;

      if (!webhookUrl) {
        return new NextResponse(
          JSON.stringify({ message: "Webhook URL not set" }),
          { status: 500 }
        );
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ embeds: [embed] }),
      });

      if (!response.ok) {
        return new NextResponse(JSON.stringify({ message: "Server error" }), {
          status: 500,
        });
      }

      return new NextResponse(JSON.stringify({ message: "Embed sent" }), {
        status: 200,
      });
    } catch (error) {
      console.error("Error sending embed:", error);
      return new NextResponse(JSON.stringify({ message: "Server error" }), {
        status: 500,
      });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
    });
  }
}
