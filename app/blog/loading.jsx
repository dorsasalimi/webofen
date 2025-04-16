const loading = () => {
    return (
        <div className="flex justify-center bg-[#fafafa] items-center h-[100vh]">
            <video width="140" height="70" autoPlay muted loop>
                <source src="/videos/loading.m4v" type="video/mp4" />
            </video>
        </div>
    )
}
export default loading;