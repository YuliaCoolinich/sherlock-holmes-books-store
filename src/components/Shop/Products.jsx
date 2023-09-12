import ProductItem from './ProductItem';
import classes from './Products.module.css';
import imageTom1 from '../../images/tom-1.png';
import imageTom2 from '../../images/tom-2.png';

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy our thrilled books</h2>
      <ul>
        <ProductItem
          id='p1'
          title="Dans la tête de Sherlock Holmes - Tome 1"
          price={20}
          description="Un simple diagnostic médical du Dr Watson se révèle être bien plus que cela... La découverte d'une poudre mystérieuse sur des vêtements et d'un ticket de spectacle très particulier amène Sherlock Holmes à penser que le patient n'est pas l'unique victime d'un complot de grande ampleur. Il semblerait en effet que l'étrange disparition de londoniens trouve son explication dans les représentations d'un magicien Chinois.
          D'autres tickets retrouvés confirment les soupçons du détective..."
          image={imageTom1}
        />
        <ProductItem
          id='p2'
          title="Dans la tête de Sherlock Holmes - Tome 2"
          price={10}
          description="Dans la conclusion de cette affaire, Sherlock Holmes et le Dr Watson poursuivent la piste du « ticket scandaleux », à leurs risques et périls ! Quel genre de complot trame le sulfureux mage ? Le logicien de baker street en suspecte-t-il la réelle étendue ? . Dans les écrits de Conan Doyle, Watson n'a pu dépeindre que la face émergée de Sherlock Holmes... Mais dans cette enquête inédite, nous pénétrons visuellement le mental du détective, le long du fil de son raisonnement, et à travers l'architecture de son monde interdit!"
          image={imageTom2}
        />
      </ul>
    </section>
  );
};

export default Products;
