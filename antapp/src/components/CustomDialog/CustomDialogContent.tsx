import {DialogTitle, IconButton, DialogContent} from '@mui/material';
import {ReactNode, FC} from 'react';
import CloseIcon from '@mui/icons-material/Close';

type DialogCustomContentProps = {
    children: ReactNode;
    closeDialog?: (() => void) | undefined;
};

const DialogCustomContent: FC<DialogCustomContentProps> = ({children, closeDialog,}) => (
    <>
        <DialogTitle>
            <IconButton
                aria-label="close"
                onClick={closeDialog}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon/>
            </IconButton>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
    </>
);

DialogCustomContent.defaultProps = {
    closeDialog: undefined,
};

export default DialogCustomContent;