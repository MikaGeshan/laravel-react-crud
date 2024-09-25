import { Link } from "@inertiajs/react";

export default function Layout({ children, layout = true }) {
    if (!layout) {
        return children;
    }

    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href="/home">
                        Home
                    </Link>
                    <Link className="nav-link" href="/posts/create">
                        Create
                    </Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
