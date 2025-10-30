const texts = {
    fr: {
        title: 'Contact',
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Email',
        message: 'Message',
        cancel: 'Fermer',
        send: 'Envoyer',
        sending: 'Envoi...',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi. Veuillez réessayer.'
    },
    en: {
        title: 'Contact',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        message: 'Message',
        cancel: 'Close',
        send: 'Send',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.'
    }
};

export const getContactDialogText = (language: 'fr' | 'en') => {
    return texts[language] || texts.fr;
}