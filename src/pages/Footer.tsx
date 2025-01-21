export default function Footer(){
    return(
        <footer className="h-1000 flex flex-col bg-primary-gray-2 p-14rem">
            <section className="flex justify-between">
                <article className="flex flex-row basis-full">
                    <h1>Mimon.</h1>
                    <p></p>
                </article>
                <article className="flex basis-full">
                    <h1>icons</h1>
                </article>
            </section>
            <section>
                <hr className="mb-1" />
                <p className="text-center text-white">&#169; 2025 Mimon. All rights reserved.</p>
            </section>
        </footer>
    )
}