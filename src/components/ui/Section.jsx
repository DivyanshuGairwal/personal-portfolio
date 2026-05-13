import clsx from 'clsx';

export const Section = ({ children, id, className }) => {
    return (
        <section
            id={id}
            className={clsx("py-12 md:py-16 relative", className)}
        >
            <div className="max-w-7xl mx-auto px-6 max-md:px-4">
                {children}
            </div>
        </section>
    );
};
