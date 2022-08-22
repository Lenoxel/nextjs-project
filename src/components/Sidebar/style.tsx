const Style = () => {
    return (
        <style jsx>{`
            nav {
                height: 100%;
                display: flex;
                flex-direction: column;
                width: 250px;
                background-color: #fafafa;
                padding: 32px;
                border-right: 1px solid #eaeaea;
            }

            nav > a {
                margin: 8px 0;
                text-decoration: none;
                background: white;
                border-radius: 4px;
                font-size: 14px;
                padding: 12px 16px;
                text-transform: uppercase;
                font-weight: 600;
                letter-spacing: 0.025em;
                color: #333;
                border: 1px solid #eaeaea;
                transition: all 0.125s ease;
            }

            nav > a:hover {
                background-color: #eaeaea;
            }

            input {
                margin: 32px 0;
                text-decoration: none;
                background: white;
                border-radius: 4px;
                border: 1px solid #eaeaea;
                font-size: 14px;
                padding: 8px 16px;
                height: 28px;
            }
        `}</style>
    );
};

export default Style;