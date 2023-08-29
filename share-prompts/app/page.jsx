import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        {/* underscore indicates its our own styling! */}
        <h1 className="head_text text-center"> 
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient"> AI-Powered Prompts</span>    
        </h1>
        <p className="desc text-center">
            Prompt app with some fancy description 
            to help users in theory. share and stuff!
        </p>

        <Feed />
    </section>
  )
}

export default Home