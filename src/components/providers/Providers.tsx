import { ThemeProvider } from './ThemeProvider';

export const Providers = ({ children }: React.PropsWithChildren) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
};
