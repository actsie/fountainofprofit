import { ICustomIcon } from "@/types";

export default function CustomIcon({ icon: Icon, dir = 'left' }: ICustomIcon) {
    return (
        <div className={`p-2 aspect-square rounded-full text-purple-600 shadow-[inset_0_4px_4px_rgba(255,255,255,0.25),0_4px_10px_rgba(0,0,0,0.08)] ${dir === 'left' ? '-rotate-15' : 'rotate-15'}`} style={{ background: 'radial-gradient(ellipse 150% 120% at 50% 100%, #ffffff 0%, #edf9f8 40%, #e0dafc 65%, #d4c9ff 85%, #d0c0ff 100%)' }}>
            <Icon size={24} />
        </div>
    )
}