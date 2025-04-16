const Faq = ({data}) =>{
    return(
        <section id="faq" >
            <h2>سوالات متداول</h2>
            <ul>
            {
                data.map((faq,i)=>(
                    <li className="m-4 list-disc" key={i}>
                        <p>{faq.title}</p>
                        <p className="px-5 py-2 m-2 bg-zinc-200 rounded-md">{faq.content}</p>
                    </li>
                ))
            }
            </ul>
        </section>
    )
}
export default Faq;