import { rem } from "@mantine/core";

export const theme = {
    colorScheme: 'light',
    focusRing: 'never',
    respectReducedMotion: true,
    defaultRadius: 12,
    white: '#fff',
    black: '#000',
    defaultGradient: { deg: 90, from: '#FF6F91', to: '#FF9671' },
    lineHeight: 1.5,
    fontSizes: { xs: rem(12), sm: rem(14), md: rem(16), lg: rem(18), xl: rem(20) },
    radius: { xs: rem(3), sm: rem(6), md: rem(9), lg: rem(12), xl: rem(999) },
    spacing: { xs: rem(4), sm: rem(8), md: rem(12), lg: rem(16), xl: rem(20) },
    breakpoints: { xs: '30em', sm: '48em', md: '64em', lg: '74em', xl: '90em' },
    loader: 'dots',
    datesLocale: 'tr-TR',
    dir: 'ltr',
    headings: {
        fontWeight: 700,
        sizes: {
            h1: { fontSize: rem(36), fontWeight: 700, lineHeight: 3.3 },
            h2: { fontSize: rem(32), fontWeight: 700, lineHeight: 3 },
            h3: { fontSize: rem(18), fontWeight: 700, lineHeight: 1.6 },
            h4: { fontSize: rem(18), fontWeight: 700, lineHeight: 1.2 },
            h5: { fontSize: rem(16), fontWeight: 700, lineHeight: 1.2 }, //
            h6: { fontSize: rem(14), fontWeight: 700, lineHeight: 1.2 }, //
        },
    }
}
