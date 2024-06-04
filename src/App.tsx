import imgUrl from './assets/images/avatar-jessica.jpeg';
import ButtonLink from "./components/button-link.tsx";

export type LinkItem = {
    label: string;
    url: string;
}


const linkItems: LinkItem[] = [
    {
        label: 'GitHub',
        url: 'https://github.com/TripCoder93'
    },
    {
        label: 'LinkedIn',
        url: 'www.linkedin.com/in/alvaradoandre',
    },
    {
        label: 'Frontend Mentor',
        url: 'https://www.frontendmentor.io/profile/AndreCode2093'
    },
    {
        label: 'Twitter',
        url: 'x.com'
    },
    {
        label: 'Instagram',
        url: 'https://www.instagram.com/alvaradoandre/',
    }
];


export const App = () => {
    return (
        <main>
            <div className="card">
                <img src={imgUrl} alt="Profile Pic" className="profile"/>
                <div className="fullName">André Alvarado</div>
                <div className="location">Piura, Perú</div>
                <div className="description">"Front-end developer and Harry Potter fan"</div>
                {linkItems.map((linkItem) =>
                    <ButtonLink url={linkItem.url}
                                key={linkItem.label}>{linkItem.label}
                    </ButtonLink>
                )}
            </div>
        </main>
    )
}

export default App
