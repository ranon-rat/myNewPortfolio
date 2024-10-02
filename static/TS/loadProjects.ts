import * as classes from "./classes.js";

const projectsNames = [
  "anonpost",
  "blog_made_in_rust",
  "haskell-discord-compiler",
  "sayBruh",
  "simple cloud made in go",
  "simple chat made in go",
  "brainfuck cool hello world",
  "neural-network-in-cpp",
  "blog in go",

];

var projects: Record<string, classes.project> = {
  anonpost: {
    url: "https://github.com/bruh-boys/anonpost",
    description: "simple socialnetwork like 4chan ",
    image:
      "https://media.discordapp.net/attachments/820472030474272769/874969191013310534/anon_post.png",
  },
  blog_made_in_rust: {
    url: "https://github.com/ranon-rat/blog_made_in_rust",
    description: "simple blog made in rust",
    image:
      "https://media.discordapp.net/attachments/820472030474272769/874965362599419924/blog_made_in_rust.png",
  },
  "haskell-discord-compiler": {
    url: "https://github.com/ranon-rat/haskell-discord-compiler",
    description:
      "a simple discord bot made in haskell that compiles and runs the code that you insert",
    image:
      "https://media.discordapp.net/attachments/820472030474272769/874962226111467520/haskell_bot.png",
  },
  sayBruh: {
    url: "https://github.com/ranon-rat/sayBruh",
    description:
      "is  a rebuild of saycheese made in golang because the original saycheese use php and old thecnologies",
    image:
      "https://camo.githubusercontent.com/058ed8bec67f8beeaf01abb90eaa5c4921e36a121649890422c1652980e0e3bd/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3738363735323838353938323632353836322f3739333239303535383136343536363032362f436170747572615f64655f50616e74616c6c615f323032302d31322d32385f615f6c61735f372e33332e31335f702e6d2e2e706e673f77696474683d31323536266865696768743d363933",
  },
  simpleCloudInGO: {
    url: "https://github.com/ranon-rat/simpleCloudInGO",
    description: "simple cloud made in go",
    image:
      "https://media.discordapp.net/attachments/820472030474272769/874957371569483816/cloud_in_go.png",
  },
  simpleChatMadeInGO: {
    url: "http://github.com/ranon-rat/simpleChatMadeInGO",
    description:
      "simple chat that i made in go for learn more about websockets",
    image:
      "https://media.discordapp.net/attachments/820472030474272769/874954221185798184/CHAT_IN_GO.png",
  },
  "brainfuck-cool-helloworld": {
    url: "https://github.com/ranon-rat/brainfuck-cool-helloworld",
    description: "a cool hello world  that I did as a challenge",
    image:
      "https://camo.githubusercontent.com/526d9eb0594bdd43ddece097e01a7c564c0d2112641e4ca6df410b7dfd03b619/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3832303437323033303437343237323736392f3833303437343430343432383235313139362f436170747572615f64655f50616e74616c6c615f323032312d30342d31305f615f6c61735f392e35342e33382e706e673f77696474683d31393230266865696768743d323339",
  },
  "neural-network-in-cpp": {
    url: "https://github.com/ranon-rat/neural-network-with-cpp",
    description:
      "a really simple neural network designed for genetic algoritghms",
    image:
      "https://camo.githubusercontent.com/86444161fb099b1fc716e03d6f35ff46687023443038e17fad07c14452e775a0/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3832303437323033303437343237323736392f3832313330353332313637383833313631362f3136313432343931315f323836363933303336363839393339345f3335353437313732313139323032343537355f6e2e706e673f77696474683d31363734266865696768743d393432",
  },
  makingABlogWithGolang: {
    url: "https://github.com/ranon-rat/makingABlogWithGolang",
    description: "a simple blog made in golang that I made for practice",
    image:
      "https://camo.githubusercontent.com/96e9eb8fde3b741ed59c0632df306a059780cbf891e04d831db1d710320f7f07/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3738363735323838353938323632353836322f3739363433303930323736323031323732322f436170747572615f64655f50616e74616c6c615f323032312d30312d30365f615f6c61735f31312e33302e31385f612e6d2e2e706e67",
  },
};

(async function main() {
  let resp = await fetch("https://api.github.com/users/ranon-rat/repos?per_page=80");
  let repos = await resp.json();
  var projectElement: HTMLElement = document.getElementById("projects_container") as HTMLElement;

  repos.forEach((repo: any) => {
    console.log(repo.name)

    if (projects.hasOwnProperty(repo.name)) {
      projects[repo.name].stars = repo.stargazers_count;

      projectElement.innerHTML +=
        `<div class="project_structure">
      <div class="PS_header">
        <div class="PS_head">
          <h2>${repo.name}</h1>
          <i class="fas fa-star">${repo.stargazers_count}</i>
        </div>

        <hr />
      </div>

      <div class="PS_body">
        <p><br>${projects[repo.name].description}</p>

        <div class="PSB_image">
          <img src="${projects[repo.name].image}" />
        </div>
      </div>
    </div>`;
    }
  });
})();