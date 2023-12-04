
import girl from '../resources/girl-with-cup.jpg'
import cupOfCoffee from '../resources/cup-with-coffee.png'

export default class AboutService {

    getAboutUsData() {
        return {
            img: null,
            title: 'About us',
            text: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n' +
                'Afraid at highly months do things on at. Situation recommend objection do intention\n' +
                'so questions. As greatly removed calling pleased improve an. Last ask him cold feel\n' +
                'met spot shy want. Children me laughing we prospect answered followed. At it went\n' +
                'is song that held help face.\n' +
                '\n' +
                'Now residence dashwoods she excellent you. Shade being under his bed her, Much\n' +
                'read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant\n' +
                'horrible but confined day end marriage. Eagerness furniture set preserved far\n' +
                'recommend. Did even but nor are most gave hope. Secure active living depend son\n' +
                'repair day ladies now.'
        }
    }

    getAboutOurBeansData() {
        return {
            img: girl,
            alt: 'girl with cup of coffee',
            title: 'About our beans',
            text: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n' +
                '\n' +
                'Afraid at highly months do things on at. Situation recommend objection do intention\n' +
                'so questions. \n' +
                'As greatly removed calling pleased improve an. Last ask him cold feel\n' +
                'met spot shy want. Children me laughing we prospect answered followed. At it went\n' +
                'is song that held help face.'
        }
    }

    getAboutOurGoodsData() {
        return {
            img: cupOfCoffee,
            alt: 'cup of coffee',
            title: 'About our goods',
            text: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n' +
                '\n' +
                'Afraid at highly months do things on at. Situation recommend objection do intention\n' +
                'so questions. \n' +
                'As greatly removed calling pleased improve an. Last ask him cold feel\n' +
                'met spot shy want. Children me laughing we prospect answered followed. At it went\n' +
                'is song that held help face.'
        }
    }
}