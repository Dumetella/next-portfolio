import React from 'react';
import AppStoreIcon from './AppStoreIcon';
import BookmarkIcon from './BookmarkIcon';
import CodepenIcon from './CodepenIcon';
import ExternalIcon from './ExternalIcon';
import FolderIcon from './FolderIcon';
import ForkIcon from './ForkIcon';
import GithubIcon from './GithubIcon';
import InstagramIcon from './instagramIcon';
import LinkedinIcon from './LinkedinIcon';
import PlayStoreIcon from './PlaystoreIcon';
import TwitterIcon from './TwitterIcon';


interface IconProps {
    name: string;
}

const Icon = (props: IconProps): JSX.Element => {
    switch (props.name) {
        case 'AppStore':
            return <AppStoreIcon />;
        case 'Bookmark':
            return <BookmarkIcon />;
        case 'Codepen':
            return <CodepenIcon />;
        case 'External':
            return <ExternalIcon />;
        case 'Folder':
            return <FolderIcon />;
        case 'Fork':
            return <ForkIcon />;
        case 'GitHub':
            return <GithubIcon />;
        case 'Instagram':
            return <InstagramIcon />;
        case 'Linkedin':
            return <LinkedinIcon />;
        case 'Loader':
            return <div></div>;
        case 'Logo':
            return <div></div>;
        case 'PlayStore':
            return <PlayStoreIcon />;
        case 'Star':
            return <div></div>;
        case 'Twitter':
            return <TwitterIcon />;
        default:
            return <ExternalIcon />;
    }
};

export default Icon;