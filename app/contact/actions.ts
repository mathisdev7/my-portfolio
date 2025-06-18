"use server";

export async function submitContactForm(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const linkedin = formData.get("linkedin") as string;
    const message = formData.get("message") as string;

    if (!firstName || !lastName || !email || !message) {
      return {
        success: false,
        error: "All required fields must be filled out",
      };
    }

    const name = `${firstName} ${lastName}`;

    const embed = {
      title: "New contact message",
      description: `Message from ${name} (${email}):\n${message}`,
      color: 3092790,
      fields: [
        {
          name: "Name",
          value: `${name}`,
          inline: true,
        },
        {
          name: "LinkedIn",
          value: linkedin || "Not provided",
          inline: true,
        },
        {
          name: "Email",
          value: email,
          inline: true,
        },
        {
          name: "Content",
          value: message,
        },
      ],
      footer: {
        text: "Message sent from the contact form",
      },
      timestamp: new Date().toISOString(),
    };

    const webhookUrl = process.env.WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("WEBHOOK_URL environment variable is not set");
      return {
        success: false,
        error: "Server configuration missing",
      };
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ embeds: [embed] }),
    });

    if (!response.ok) {
      console.error(
        "Failed to send webhook:",
        response.status,
        response.statusText
      );
      return {
        success: false,
        error: "Error sending the message",
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}
