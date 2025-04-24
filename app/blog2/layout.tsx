import localFont from 'next/font/local';
const myFont = localFont({
    src: '../../src/assets/fonts/1639093199705607.ttf',
})
export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section className={myFont.className}>{children}</section>;
}
