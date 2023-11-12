INSERT INTO `user` (id, username, password, role)
              VALUES (1,'miroslav','$2y$12$NH2KM2BJaBl.ik90Z1YqAOjoPgSd0ns/bF.7WedMxZ54OhWQNNnh6','ADMIN');
INSERT INTO `user` (id, username, password, role)
              VALUES (2,'tamara','$2y$12$DRhCpltZygkA7EZ2WeWIbewWBjLE0KYiUO.tHDUaJNMpsHxXEw9Ky','KORISNIK');
INSERT INTO `user` (id, username, password, role)
              VALUES (3,'petar','$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC','KORISNIK');

INSERT INTO category (id, name) VALUES (1, 'Moisturizers');
INSERT INTO category (id, name) VALUES (2, 'Cleansers');
INSERT INTO category (id, name) VALUES (3, 'Sunscreen');
INSERT INTO category (id, name) VALUES (4, 'Eye Care');
INSERT INTO category (id, name) VALUES (5, 'Masks');
INSERT INTO category (id, name) VALUES (6, 'Treatments');
INSERT INTO category (id, name) VALUES (7, 'Lip Balms');


INSERT INTO product (id, name, price, available, rating, description, ingredients, category_id) 
	VALUES (1,'Night Cream',
			20, FALSE, 4, 
			'A hydrating overnight or 10-minute daytime use mask that leaves skin refreshed, visibly smooth, and hydrated for up to 24 hours.',
			'Aqua (Water), Helianthus Annuus (Sunflower) Seed Oil, Glycerin, Betaine, Methylpropanediol, Polyacrylate Crosspolymer-6, 1,2-Hexanediol, Simmondsia Chinensis (Jojoba) Seed Oil, Carbomer, Glyceryl Caprylate',
			1);


INSERT INTO product (id, name, price, available, rating, description, ingredients, category_id) 
	VALUES (2,'Face Oil',
			15, TRUE, 3, 
			'A retinol face oil that minimizes the look of lines, hyperpigmentation, blemishes, and sun damage, locking in moisture and restoring a healthy glow.',
			'Sclerocarya Birrea Seed Oil, Glycine Soja (Soybean) Oil, Retinol, Tocopherol, Ceramide AP, Ceramide NP',
			1);
			

INSERT INTO product (id, name, price, available, rating, description, ingredients, category_id) 
	VALUES (3,'Face Wash',
			10, TRUE, 4, 
			'A gentle, soap-free foaming cleanser formulated to thoroughly rinse away excess oil, makeup, and sunscreen without disturbing your skin’s protective barrier.',
			'Water (Aqua), Sodium Lauroamphoacetate, Sodium Cocoyl Isethionate',
			2);
			
INSERT INTO product (id, name, price, available, rating, description, ingredients, category_id) 
	VALUES (4,'Body Sunscreen',
			22, TRUE, 5, 
			'A lightweight, daily sunscreen that supports skin against harmful UV rays while visibly brightening complexion.',
			'Avobenzone 2.3%, Homosalate 10.0%, Octisalate 5.0%, Octocrylene 5.0%, Inactive Ingredients:Trisiloxane, Water, Diisopropyl Sebacate',
			3);
			
INSERT INTO product (id, name, price, available, rating, description, ingredients, category_id) 
	VALUES (5,'Eye cream',
			18, FALSE, 4, 
			'A cooling under-eye gel stick that visibly reduces puffiness with caffeine and soothes with seawater for hydrated, refreshed-looking skin.',
			'Aqua/Water/Eau, Propanediol, Bis-PEG-18 Methyl Ether Dimethyl Silane, Sodium Stearate, Aloe Barbadensis Leaf Juice, Kappaphycus Alvarezii Extract, Maris Aqua/Sea Water/Eau de Mer, Caffeine',
			4);
			
INSERT INTO product (id, name, price, available, rating, description, ingredients, category_id) 
	VALUES (6,'Face Mask',
			6, TRUE, 3, 
			'A collection of banana fiber masks formulated with enriched vitamins to address all types of skin concerns—designed to work in five minutes and act as a shot of care for your skin.',
			'Aqua (Water), Butylene Glycol, Glycerin, Polyglyceryl-10 Laurate, 1,2-Hexanediol, Hydroxyacetophenone, Lecithin, Glycosyl Trehalose',
			5);
			
INSERT INTO product (id, name, price, available, rating, description, ingredients, category_id) 
	VALUES (7,'Acne Treatment',
			8, TRUE, 5, 
			' A nonirritating squalane-based serum formulated with salicylic acid to effectively decongest the skin and exfoliate its surface.',
			'Squalane, Caprylic/Capric Triglyceride, Pentylene Glycol, Salicylic Acid, Oleic/Linoleic/Linolenic Polyglycerides, 4-t-Butylcyclohexanol, Hydroxymethoxyphenyl Decanone, Phenoxyethanol, Chlorphenesin',
			6);
			
INSERT INTO product (id, name, price, available, rating, description, ingredients, category_id) 
	VALUES (8,'Balm',
			12, TRUE, 3, 
			'A lightweight, moisture-coating lip balm for hydrated, tinted, and kissable lips throughout the day.',
			'Hydrogenated Polyisobutene,Phytosteryl/Isostearyl/Cetyl/Stearyl/Behenyl Dimerdilinoleate, Hydrogenatedpoly(C6-14 Olefin), Diisostearylmalate, Polybutene, Phytosterylisostearyl Dimer Dilinoleate',
			7);
			
INSERT INTO card (id, card, description) 
VALUES (1, 'Explore', 'Explore the realm of beauty and wellness with EcoGlow Skincare, where every product invites you on a journey of self-discovery.');

INSERT INTO card (id, card, description) 
VALUES (2, 'Meet Nature', 'Embrace the essence of green nature with EcoGlow Skincare, where our products harness the revitalizing power of natural ingredients for a healthier and more radiant you.');

INSERT INTO card (id, card, description) 
VALUES (3, 'Find Your Way', 'Find your unique path to beauty and confidence at EcoGlow Skincare, where our diverse range of products caters to your individual needs and preferences.');

INSERT INTO card (id, card, description) 
VALUES (4, 'Healthier Life', 'Embark on a journey towards a healthier and more vibrant life with EcoGlow Skincare, where self-care meets the transformative magic of nature-infused skincare.');


INSERT INTO overview (id, title, text)
VALUES (1, 'Welcome to EcoGlow Skincare – Your Gateway to Radiant Beauty!', 
		'At EcoGlow Skincare, we are passionate about delivering high-quality skincare products that enhance your natural beauty. Our mission is simple: to provide you with the best, most effective products that celebrate the power of nature.');

INSERT INTO overview (id, title, text)
VALUES (2, 'Quality Above All', 
		'We take pride in curating skincare essentials that are not only effective but are also kind to your skin and the environment. Our products are crafted with the utmost care, harnessing the potency of natural ingredients to bring out your inner glow.');

INSERT INTO overview (id, title, text)
VALUES (3, 'Customer-Centric Approach', 
		'Our commitment to customer satisfaction is unwavering. Your happiness and confidence in our products are our top priorities. We listen to your feedback, and your contentment drives our innovation.');

INSERT INTO overview (id, title, text)
VALUES (4, 'Empowering Self-Care', 
		'EcoGlow Skincare is more than just a brand – it is a commitment to your well-being. We believe that feeling good about your appearance and maintaining proper hygiene are essential aspects of self-care.');

INSERT INTO overview (id, title, text)
VALUES (5, 'A Holistic Experience', 
		'Whether you shop with us online or in our stores, we strive to provide you with the best possible service. Our knowledgeable and friendly team is here to assist you every step of the way.');

INSERT INTO overview (id, title, text)
VALUES (6, 'Join us', 
		'Join us in celebrating the beauty of nature, the joy of self-care, and the magic of EcoGlow Skincare. Discover the difference today, and let your radiant beauty shine!');

		
INSERT INTO comment (id, name, caption, comment)
VALUES (1, 'Mia Anderson', 'Radiant Skin', 'Your moisturizers are heaven-sent. My skin has never felt so soft and nourished. The hydration lasts all day. A new favorite!');

INSERT INTO comment (id, name, caption, comment)
VALUES (2, 'Emma Mitchell', 'Glowing Cleanse', 'Cleansers that actually work without drying out my skin! My nightly routine is now a pampering session. So pleased!');

INSERT INTO comment (id, name, caption, comment)
VALUES (3, 'Michael Davis', 'Sun-Kissed Protection', 'Absolutely love the sunscreen! It is not only effective but also feels so light on the skin. A summer must-have!');

INSERT INTO comment (id, name, caption, comment)
VALUES (4, 'Emily Johnson', 'Bright Eyes', 'The eye care products are a game-changer! Bye-bye tired eyes, hello refreshed look. Thank you for these magic potions!');

INSERT INTO comment (id, name, caption, comment)
VALUES (5, 'Sarah Smith', 'Luscious Lips', 'The lip balm is my daily essential. Keeps my lips hydrated and adds a subtle hint of gloss. I can not live without it!');

INSERT INTO comment (id, name, caption, comment)
VALUES (6, 'Olivia Wilson', 'Spa At Home', 'Face masks for the win! Instant spa vibes at home. My skin feels rejuvenated and looks radiant. Pure indulgence.');

