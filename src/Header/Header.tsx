import { IconBell, IconSettings } from '@tabler/icons-react';
import { Avatar, Indicator } from '@mantine/core';
import careerNestLogo from '../images/CareerNest.png';
import NavLinks from './NavLinks';

const Header = () => {
    return <div className="w-full bg-mine-shaft-950 h-28 text-white flex px-6 justify-between items-center">
        <div className="flex gap-2 items-center">
            <img
                src={careerNestLogo}
                alt="CareerNest Logo"
                className="h-10 w-10"
            />
            <div className="text-3xl font-semibold">CareerNest</div>
        </div>
        {NavLinks()}
        <div className="flex gap-3 items-center">
            <div className="flex items-center gap-2">
                <div>Harsh</div>
                <Avatar src="avatar.png" alt="it's me" />
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettings stroke={1.5} />
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <Indicator color="brightSun.4" offset={6} size={8} withBorder processing>
                    <IconBell stroke={1.5} />
                </Indicator>
            </div>
        </div>
    </div>
}
export default Header;