import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Stack, Alert, CircularProgress, Box } from "@mui/material";
import emailjs from '@emailjs/browser';
import { useContext, useState } from "react";
import { languageContext } from "../../languageContext";
import { getContactDialogText } from "../TextContent/ContactDialogText";
import { EMAILJS_CONFIG } from "../../Emailjs_config";
import SendIcon from '@mui/icons-material/Send';

const SendMessageDialog: React.FC<{ open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ open, setOpen }) => {
    const language = useContext(languageContext);
    const text = getContactDialogText(language);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const templateParams = {
            name: formData.get('user_first_name') + ' ' + formData.get('user_last_name'),
            email: formData.get('user_email'),
            message: formData.get('message')
        };
        emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams,
            EMAILJS_CONFIG.publicKey
        )
        .then(() => {
            setStatus('success');
            setLoading(false);
        })
        .catch(() => {
            setStatus('error');
            setLoading(false);
        });
    }

    const handleClose = () => {
        if (!loading) {
            setOpen(false);
            //setStatus('idle');
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: 2,
                    }
                }
            }}
        >
            <DialogTitle sx={{ pb: 1, fontSize: '1.5rem', fontWeight: 600 }}>
                {text.title}
            </DialogTitle>
            <DialogContent>
                {status !== 'idle' ? (
                    <Box sx={{ py: 2 }}>
                        <Alert
                            severity={status === 'success' ? 'success' : 'error'}
                            sx={{ mb: 2 }}
                        >
                            {status === 'success' ? text.success : text.error}
                        </Alert>
                    </Box>
                ) : (
                    <form onSubmit={handleSubmit} id="contact-form">
                        <Stack spacing={2.5} sx={{ mt: 1 }}>
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                id="FirstName"
                                label={text.firstName}
                                name="user_first_name"
                                variant="outlined"
                                disabled={loading}
                            />
                            <TextField
                                required
                                fullWidth
                                id="LastName"
                                label={text.lastName}
                                name="user_last_name"
                                variant="outlined"
                                disabled={loading}
                            />
                            <TextField
                                required
                                fullWidth
                                type="email"
                                id="Email"
                                label={text.email}
                                name="user_email"
                                variant="outlined"
                                disabled={loading}
                            />
                            <TextField
                                required
                                fullWidth
                                id="Message"
                                label={text.message}
                                name="message"
                                multiline
                                rows={4}
                                variant="outlined"
                                disabled={loading}
                            />
                        </Stack>
                    </form>
                )}
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
                <Button
                    onClick={handleClose}
                    disabled={loading}
                    sx={{ minWidth: 80 }}
                >
                    {text.cancel}
                </Button>
                {status === 'idle' && (
                    <Button
                        type="submit"
                        form="contact-form"
                        variant="contained"
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
                        sx={{ minWidth: 100 }}
                    >
                        {loading ? text.sending : text.send}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
}

export default SendMessageDialog;