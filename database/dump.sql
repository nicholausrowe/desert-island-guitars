-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: desert_island_guitars
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartItems` (
  `cartItemId` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`cartItemId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartItems`
--

LOCK TABLES `cartItems` WRITE;
/*!40000 ALTER TABLE `cartItems` DISABLE KEYS */;
INSERT INTO `cartItems` VALUES (2,1,3,279999);
/*!40000 ALTER TABLE `cartItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `cartId` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cartId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `product_id` int(11) NOT NULL,
  `view` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `creditCard` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `shippingAddress` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `productId` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `brand` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(84) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortDescription` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `longDescription` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'guitars','Gretsch','Gretsch G6118 Anniversary - 2-tone Smoke Green',239999,'/images/6118-anniversary-2-tone-smoke-green.png','Giant Gretsch sound, easy playability and period-accurate appointments merge in a lightweight instrument designed to rock.','A pair of highly dynamic TV Jones® Hilo’Tron™ single-coil pickups tops the laminated maple body, cranking out brilliant highs, warm lows and rocking mids. The traditional control complement—separate bridge and neck volume controls, three-way pickup switching, three-way tone switch and master volume—allows for near-infinite tonal variations. Add the new Gretsch “Squeezebox” paper-in-oil capacitors and you get incredibly silky vintage high end. The standard “U”-shaped maple neck bears a 12”-radius rosewood fingerboard with 21 durable medium jumbo frets for a memorable playing experience that works with any style. 1959-style trestle bracing couples the top and back of this unique instrument, generating warm, balanced tone. A pinned Space Control™ bridge lets you dial in string spacing to match your personal playing style—wide for fingerstyle players and narrower for flatpickers. Add expressiveness to your playing with the Bigsby B6CVT vibrato tailpiece while the expertly cut bone nut lets the strings slide freely, without binding in the slots, and enhances the guitar’s natural tone.'),(2,'guitars','Gretsch','Gretsch G6120T-HR Brian Setzer Signature Hot Rod™ Hollow Body',259999,'/images/setzer-6120-candy-magenta.png','A truly rocking instrument boasting as much swagger as the showman who inspired it.','The single-cutaway hollow body G6120T-HR has an arched maple top with \'59 trestle bracing and oversized F-holes for improved sonic snap and projection. The maple neck features a 9.5\"-12” compound radius rosewood fingerboard with rolled edges for comfortable chording or speedy riffing across 22 medium frets and pearloid Neo-Classic™ thumbnail inlays. Dual TV Jones® Brian Setzer Signature Filter’Tron™ humbucking pickups replicate Brian’s tight and punchy lows with a slightly hotter output that captures his unmistakably lively tone.'),(3,'guitars','Gretsch','Gretsch G6120SH Brian Setzer Hot Rod™ - Highland Green',279999,'images/g6120sh-brian-setzer-hot-rod-highland-green.png','Hot Rod models are built to Setzer\'s exacting specs, now featuring a striking assortment of colors over a flame maple body.','As the name implies this \"Hot-Rod\" is stripped down version of the standard Setzer model done in gorgeous and unusual finishes. They\'ve removed all controls except master volume and a pickup selector so nothing gets in the way of the raw ’59 6120 sound. The Schaller locking tuners and a pinned bridge make this a very versatile Gretsch capable a great variety of sounds from vintage style clean tones to high gain rock & roll. The guitar is immensely playable for a large hollow body with a soft “v” shaped neck with a lower profile then the standard G6120 models. Another less visible but key features of the model is the \'59 spec trestle bracing. This bracing adds mass and stability under the bridge and electronics dramatically increasing sustain and rejecting feedback while still retaining the classic Gretsch hollow body vibe. A slight variation on the 6120 theme of the Hot Rod is the 9.5\" fretboad radius, which is unique to the Brian Setzer Signature model guitars!'),(4,'guitars','Gretsch','Gretsch G5420T Surf Green Limited Edition ',119999,'/images/g5420-seafoam-green.png','Limited to only 24 Made in this Surf Green/Seafoam green. Just like a 57 Chevy! Gretsch 5420T In Seafoam / Surf Green. ','This Factory Special Run features everything that is included with its sisters in the Gretsch G5420T Electromatics but with a Exclusive Surf Green finish. Add the fact that a limited run of 24 have been manufactured and you will own a unique piece of Gretsch History. The Gretsch G5420T was created with an electrifying new voice from the vibrant Black Top Filter\'tron Pickups. Volume controls for each pickup, a master volume control knob, a tone control knob and a 3 way pickup selector offers blending opportunities with full rich sound. The tone with both pickups and full volume can offer detail from the high end and clarity throughout. Backing off the master volume and going to just the bridge pickup can produce a warm tone. Add the whammy effects from the Licensed Bigsby Vibrato and you have a full spectrum tool. The single cutaway, five ply Maple body, and graceful bound f-holes of the G5420T matched with the sound post bracing offers enhanced sustain and stability that may surprise you. Other features of this guitar include a smooth playing Maple neck and bound Rosewood fretboard, 22 Jumbo frets, Adjusto-Matic Bridge, chrome plated hardware, vintage style open back tuners, adjustable truss rod, and hump block position inlays. The G5420T Electromatic® Hollow Body is a sharp new Gretsch guitar with a bound single-cutaway hollow body featuring sound-post bracing and elegant bound f holes. Other features include a maple neck, bound rosewood fingerboard with 22 medium jumbo frets and hump-block pearloid inlays, silver plexi pickguard, three-position pickup switch, classic \"G\" arrow control knobs, rosewood-based Adjusto-Matic™ bridge and Bigsby®-licensed B60 vibrato tailpiece, vintage-style open-back tuners and chrome-plated hardware.'),(5,'guitars','Gretsch','G6134T-LTD Limited Edition Penguin - 2-Tone Smoke Grey/Violet Metallic',299999,'/images/penguin-2-tone-grey.png','In a two-tone Smoke Gray/Violet Metallic finish, the Limited Edition Penguin™ offers an exquisite take on the rarest of birds.','The Penguin’s chambered mahogany body with arched maple top captures harmonic richness by letting air resonate between the top and body for livelier and more articulate tone, while a pair of TV Jones® TV Classic pickups beautifully project bright, twangy notes with a hint of growl similar to late-1950s Filter’Trons. The result is an extraordinary voice ideal for distinctive rock ‘n’ roll licks, chiming country rhythms or articulate rockabilly riffs. A three-position toggle switch, two volume pickup controls, master volume and master tone open up endless tonal possibilities.'),(6,'guitars','Gretsch','Gretsch G5230 Electromatic Jet - Broadway Jade',71999,'/images/g5230-electromatic-jet-broadway-jade.png','The Gretsch G5230T Electromatic Jet FT is, put simply, one of the most perfect live instruments you\'re ever likely to find. ','Gretsch have done everything in their power to ensure that it sounds massive. A chambered mahogany body brings a tremendous natural resonance into your electric playing.\r\n\r\nThis is made even better by the G5230T\'s incredible Filter\'Tron pickups. They amplify and emphasise your playing, bringing a wide, thundering quality to your music. Ideal for making sure every audience member hears you. And you can craft your own distinctive sound, too. A classic Bigsby tremolo allows you to apply unique, wavering tremolo to your solos and lead lines. All-conquering Gretsch quality.'),(7,'guitars','Gretsch','Gretsch Custom Shop Masterbuilt 1959 Duo Jet Custom Shop Seafoam Green',699999,'/images/duojet-custom-seafoam-green.png','The Gretsch Custom Shop has recreated the late 50\'s Gretsch Duo Jet  in all its glory.','The Gretsch Custom Shop continues to make the absolutely best Gretsch guitars ever produced. Stephen Stern has almost single handedly brought this iconic brand to the highest level of quality and workmanship that you will find anywhere. The Gretsch Custom Shop has recreated the late 50\'s Gretsch Duo Jet  in all its glory. With a great feeling Gretsch Bigsby, a beautiful custom foam green finish and amazing sounding TV Jones pickups this is the Gretsch Duo Jet that you always dreamed of playing.'),(8,'guitars','Gretsch','Gretsch G7593T Billy Duffy Signature White Falcon',359999,'/images/billy-duffy-white-falcon.png','During his storied career with The Cult, it’s been heard on every recording, powering his mammoth rock sound.','Namely its period-correct ’70s Baldwin-era shape and styling, V-shaped Falcon headstock, Silver Sparkle binding, custom wound hot “Black Top” Filter’Tron pickups with three-point adjustable ’70s-style metal bezels and Duffy’s preferred ’70s-style Bigsby tailpiece.\r\n\r\nIn addition, Duffy’s signature bird of prey features a 17” wide, 2 ¾” deep single cut-away three-ply maple body with a three-ply maple arched top and back and two spruce parallel tone bars and sound post, a three-piece maple neck with ebony fingerboard, a chrome-plated truss rod cover with Duffy’s signature emblazoned on it, a chrome-plated output jack plate, pearloid wide-block fretboard inlays, ’70s-style aluminum “G” arrow knobs and a premium gray speckled “Billy Duffy” case.'),(9,'guitars','EVH','EVH Striped Series Frankenstein Relic - Red/Black/White',169999,'/images/evh-frankenstein.png','The EVH Striped Series Frankie is a tribute to Eddie Van Halen’s iconic red, black, and white Frankenstrat.','Built from a solid chunk of basswood, this solidbody electric guitar growls with the best of them, while exhibiting rock-solid mids that can cut through a manic rhythm section with ease. A direct-mount Wolfgang humbucker nails Eddie’s classic tone, especially when you use it to push a British-voiced amp. Benefit from a comfortable quartersawn maple neck and fast-playing compound-radius fingerboard. Perform effortless dive-bombs with an EVH-branded Floyd Rose double-locking tremolo. The Striped Series Frankie is teeming with classic Van Halen aesthetics, but most importantly, it provides killer tone and lightning-fast playability. This axe belongs in every Van Halen fan’s guitar collection.');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-10 22:49:23
