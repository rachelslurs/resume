'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

type Props = {
    className?: string;
    transform?: string;
}
type IconChoice = {
    iconSelected: string | undefined;
}

const DynamicIcon: React.ComponentType<Props & IconChoice> = ({ iconSelected, className, transform, ...props }) => {
    const [Icon, setIcon] = React.useState<React.ComponentType<Props> | undefined>(undefined);
    React.useEffect(() => {
        if (iconSelected !== undefined) {
            // dynamically import only the icon we need
            const IconComp = dynamic(
                () => import(`@fortawesome/free-solid-svg-icons`).then((lib) => {
                    if (typeof iconSelected === 'string' && iconSelected in lib) {
                        const IconComponent: React.ComponentType<Props> = (props) => <FontAwesomeIcon icon={lib[iconSelected as keyof typeof lib] as IconDefinition} {...props} />;
                        IconComponent.displayName = 'IconComponent';
                        return IconComponent
                      } else {
                        throw new Error(`Icon ${iconSelected} not found in library`);
                      }
                }, (reason) => {
                    console.error(reason)
                    const DefaultComponent: React.ComponentType<Props> = () => <div>Loading</div>; 
                    DefaultComponent.displayName = 'DefaultComponent'; 
                    return DefaultComponent; 
                }) 
            );
            setIcon(() => IconComp)
        }
    }, [iconSelected])
    return (
        <>
            {Icon && <Icon className={className} transform={transform} {...props} />}
        </>
    );
};

export default DynamicIcon