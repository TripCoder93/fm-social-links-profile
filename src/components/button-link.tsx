import './button-link.css';
import {FC, ReactNode} from "react";

type ButtonLinkProps = {
    url: string;
    children?: ReactNode;
}

const ButtonLink: FC<ButtonLinkProps> = ({children, url}) => {
    return (
        <a className="button-link" href={url}>
            {children}
        </a>
    );
}

export default ButtonLink;
