import { ListMetaMedia } from '../../src/list-meta-media/list-meta-media.entity'
import { MetaMedia } from '../../src/meta-media/meta-media.entity'
import { Connection } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'

export default class MetaMediaUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {

    await this.insertListPress(connection);
    await this.insertListVideo(connection);
  }




  private async insertListPress(connection: Connection) {
    let listRepository = connection.getRepository(ListMetaMedia);
    let listPresse = new ListMetaMedia()
    listPresse.title = "Presse écrite";
    listPresse.id = 1;
    listPresse.metaMedias = [];

    listPresse = await listRepository.save(listPresse);


    const media1 = new MetaMedia({
      id: 1,
      key: "lvsl",
      url: "https://lvsl.fr/",
      title: "Le Vent Se Lève",
      logo: "assets/lvsl_logo.jpg",
      listMetaMedia: listPresse,
      donation: "https://lvsl.fr/faire-un-don/",
    })
    const media2 = new MetaMedia({
      id: 2,
      key: "mrmondialisation",
      url: "https://mrmondialisation.org/",
      title: "Mr Mondialisation",
      logo: "assets/mrmondialisation_logo.png",
      listMetaMedia: listPresse,
      donation: "https://en.tipeee.com/mr-mondialisation",
    })
    const media4 = new MetaMedia({
      id: 4,
      key: "lemondemoderne",
      url: "https://www.lemondemoderne.media/",
      title: "Le Monde Moderne",
      logo: "assets/lemondemoderne.jpg",
      listMetaMedia: listPresse,
      donation: null,
    })
    const media8 = new MetaMedia({
      id: 8,
      key: "laquadrature",
      url: "https://www.laquadrature.net/",
      title: "La quadrature du net",
      logo: "https://www.athena-app.fr/quadrature.png",
      listMetaMedia: listPresse,
      donation: "https://soutien.laquadrature.net/",
    })
    const media9 = new MetaMedia({
      id: 9,
      key: "relevepeste",
      url: "https://lareleveetlapeste.fr/",
      title: "La relève et La peste",
      logo: "https://www.athena-app.fr/lareleveetlapeste.jpg",
      listMetaMedia: listPresse,
      donation: null,
    })
    const media10 = new MetaMedia({
      id: 10,
      key: "bonpote",
      url: "https://bonpote.com/",
      title: "Bon Pote",
      logo: "https://www.athena-app.fr/bon-pote.png",
      listMetaMedia: listPresse,
      donation: "https://fr.tipeee.com/bon-pote/",
    })
    const media12 = new MetaMedia({
      id: 12,
      key: "lesrepliques",
      url: "https://lesrepliques.com/",
      title: "Les Repliques",
      logo: "https://www.athena-app.fr/les-repliques.png",
      listMetaMedia: listPresse,
      donation: "https://fr.tipeee.com/les-repliques",
    })

    const metaMediaRepository = connection.getRepository(MetaMedia);

    await metaMediaRepository.save(media1);
    await metaMediaRepository.save(media2);
    await metaMediaRepository.save(media4);
    await metaMediaRepository.save(media8);
    await metaMediaRepository.save(media9);
    await metaMediaRepository.save(media10);
    await metaMediaRepository.save(media12);


    return listPresse;
  }



  async insertListVideo(connection: Connection) {

    let listRepository = connection.getRepository(ListMetaMedia);
    let listVideo = new ListMetaMedia()
    listVideo.title = "Vidéo"
    listVideo.metaMedias = []
    listVideo.id = 3;
    listVideo =await listRepository.save(listVideo);


    const media1 = new MetaMedia({
      id: 7,
      key: "osonscauser",
      url: "UCVeMw72tepFl1Zt5fvf9QKQ",
      title: "Osons causer",
      logo: "https://www.athena-app.fr/osonscauser.jpg",
      donation: null,
      listMetaMedia: listVideo,
    });


    const metaMediaRepository = connection.getRepository(MetaMedia);
    await metaMediaRepository.save(media1);

  }
}
