export const CARD_COLORS = {
    yellow: {
        color: '#F6E05E',
        bgGrey: '#B2AFA0'
    },
    red: {
        color: '#FEB2B2',
        bgGrey: '#B8A8A8'
    },
    green: {
        color: '#9AE6B4',
        bgGrey: '#A1AD9F'
    },
    blue: {
        color: '#90CDF4',
        bgGrey: '#9EA8B3'
    }
};

export function getCardColorStyles(colorKey) {
    const selected = CARD_COLORS[colorKey] || CARD_COLORS.yellow;
    return `--card-color: ${selected.color}; --bg-grey-color: ${selected.bgGrey};`;
}