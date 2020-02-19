const styles = (theme) => ({
    box: {
        display: 'flex',
        alignItem: 'center'
    },
    shape: {
        fontFamily: theme.typography.fontFamily,
        padding: '20px',
        margin: '10px',
        color: theme.shape.textColor,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.shape.backgroundColor,
    }
});

export default styles;