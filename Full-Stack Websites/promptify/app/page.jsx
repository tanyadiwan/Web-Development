import '@components/Feed';
import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Unlock Creativity
      <br className="max-md:hidden" />
      <span className="orange_gradient">
      With Every Prompt - PromptiFy
      </span>
      </h1>
      <p className="desc text-center">
      "PromptiFy: Your open AI prompt generator, sparking inspiration and driving creative exploration. Discover, create, and innovate effortlessly."
      </p>
      <Feed/>
    </section>
  )
}

export default Home