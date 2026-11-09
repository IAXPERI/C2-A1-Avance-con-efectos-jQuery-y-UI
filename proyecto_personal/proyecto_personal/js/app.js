/**
 * ============================================================================
 * MATERMED — CATÁLOGO INTERACTIVO DE SUTURAS QUIRÚRGICAS SUTUMED®
 * Desarrollado con jQuery 3.7+
 *
 * Cumplimiento de Rúbrica:
 * 1. Selecciones dinámicas y filtros de categorías combinados.
 * 2. Efectos de animación y visibilidad: .hide(), .show(), .slideToggle(), .fadeToggle().
 * 3. Maquetación UI en tarjetas (cards) interactivas con imágenes de empaques Sutumed.
 * 4. Formulario con validaciones completas en tiempo real y retroalimentación.
 * 5. Integración con Redes Sociales y datos formales de la microempresa Matermed.
 * ============================================================================
 */

$(document).ready(function () {
  "use strict";

  /* ==========================================================================
     1. BASE DE DATOS DEL CATÁLOGO DE SUTURAS QUIRÚRGICAS SUTUMED (MATERMED)
     ========================================================================== */
  const sutumedCatalog = [
    {
      id: "pga",
      codeBase: "SM-PGA",
      name: "Ácido Poliglicólico (PGA) SUTUMED®",
      subtitle: "Sutura Sintética Absorbible Multifilamento Trenzada Recubierta",
      category: "absorbible",
      filament: "multifilamento",
      needleGroup: "ahusada",
      specialty: "general",
      colorHex: "#7C3AED",
      colorName: "Violeta USP",
      image: "assets/img/sutumed-pga.svg",
      needleDesc: "1/2 Círculo Ahusada (CT-1) 36mm",
      threadLength: "75 cm",
      absorptionTime: "60 a 90 días (Hidrolítica)",
      tensileRetention: "65% a los 14 días / 35% a los 21 días",
      coating: "Policoprolactona y Estearato de Calcio",
      sterilization: "Óxido de Etileno (EO)",
      basePrice: 28.50,
      defaultUsp: "2-0",
      uspOptions: ["1", "0", "2-0", "3-0", "4-0"],
      clinicalUses: "Cirugía general, gastrointestinal, ginecología, urología y cierre de fascia y planos profundos."
    },
    {
      id: "pgla910",
      codeBase: "SM-PGL",
      name: "Poliglactina 910 SUTUMED®",
      subtitle: "Copolímero Sintético Absorbible (90% Glicólido / 10% L-Láctido)",
      category: "absorbible",
      filament: "multifilamento",
      needleGroup: "ahusada",
      specialty: "gineco",
      colorHex: "#9333EA",
      colorName: "Violeta Intenso",
      image: "assets/img/sutumed-pgla910.svg",
      needleDesc: "1/2 Círculo Ahusada (SH) 26mm",
      threadLength: "70 cm",
      absorptionTime: "56 a 70 días",
      tensileRetention: "75% a los 14 días / 50% a los 21 días",
      coating: "Poliglactina 370 + Estearato de Calcio",
      sterilization: "Óxido de Etileno (EO)",
      basePrice: 31.00,
      defaultUsp: "3-0",
      uspOptions: ["1", "0", "2-0", "3-0", "4-0", "5-0"],
      clinicalUses: "Aproximación de tejidos blandos, gineco-obstetricia, cirugía digestiva y ligaduras."
    },
    {
      id: "catgut-cromico",
      codeBase: "SM-CC",
      name: "Catgut Crómico SUTUMED®",
      subtitle: "Sutura Natural Absorbible de Colágeno Purificado Tratado con Sales de Cromo",
      category: "absorbible",
      filament: "multifilamento",
      needleGroup: "ahusada",
      specialty: "gineco",
      colorHex: "#92400E",
      colorName: "Marrón Crómico",
      image: "assets/img/sutumed-catgut-cromico.svg",
      needleDesc: "1/2 Círculo Redonda (CT) 40mm",
      threadLength: "75 cm",
      absorptionTime: "90 días (Fagocitosis enzimática)",
      tensileRetention: "14 a 21 días in vivo",
      coating: "Tratamiento en Sales de Cromo Trivalente",
      sterilization: "Radiación Gamma",
      basePrice: 26.00,
      defaultUsp: "0",
      uspOptions: ["1", "0", "2-0", "3-0", "4-0"],
      clinicalUses: "Cesáreas, cierre uterino, peritoneo, mucosa urinaria y cirugía ginecológica."
    },
    {
      id: "catgut-simple",
      codeBase: "SM-CS",
      name: "Catgut Simple SUTUMED®",
      subtitle: "Sutura Natural Absorbible de Rápida Asimilación Tisular",
      category: "absorbible",
      filament: "multifilamento",
      needleGroup: "ahusada",
      specialty: "general",
      colorHex: "#D97706",
      colorName: "Amarillo Natural",
      image: "assets/img/sutumed-catgut-simple.svg",
      needleDesc: "1/2 Círculo Ahusada (SH) 25mm",
      threadLength: "75 cm",
      absorptionTime: "50 a 70 días",
      tensileRetention: "7 a 10 días",
      coating: "Colágeno Natural en Solución Conservante",
      sterilization: "Radiación Gamma",
      basePrice: 24.50,
      defaultUsp: "3-0",
      uspOptions: ["0", "2-0", "3-0", "4-0"],
      clinicalUses: "Tejido adiposo subcutáneo y ligadura de vasos sanguíneos superficiales."
    },
    {
      id: "pdo",
      codeBase: "SM-PDO",
      name: "Polidioxanona (PDO) SUTUMED®",
      subtitle: "Monofilamento Sintético Absorbible de Soporte Prolongado",
      category: "absorbible",
      filament: "monofilamento",
      needleGroup: "especial",
      specialty: "general",
      colorHex: "#4F46E5",
      colorName: "Violeta / Plata",
      image: "assets/img/sutumed-pdo.svg",
      needleDesc: "1/2 Círculo Ahusada Pesada (CTX) 48mm",
      threadLength: "90 cm",
      absorptionTime: "180 a 210 días",
      tensileRetention: "70% a los 14 días / 50% a los 28 días / 25% a los 42 días",
      coating: "Monofilamento Puro Atraumático",
      sterilization: "Óxido de Etileno (EO)",
      basePrice: 36.80,
      defaultUsp: "1",
      uspOptions: ["1", "0", "2-0", "3-0", "4-0"],
      clinicalUses: "Cierre de pared abdominal de alto riesgo, pacientes oncológicos, ortopedia y cirugía pediátrica."
    },
    {
      id: "pgcl25",
      codeBase: "SM-PGC",
      name: "Poliglecaprona 25 SUTUMED®",
      subtitle: "Monofilamento Sintético Absorbible para Cirugía Plástica e Intradérmica",
      category: "absorbible",
      filament: "monofilamento",
      needleGroup: "cortante",
      specialty: "plastica",
      colorHex: "#EA580C",
      colorName: "Coral / Incoloro",
      image: "assets/img/sutumed-pgcl25.svg",
      needleDesc: "3/8 Círculo Cortante Reverso (PS-2) 19mm",
      threadLength: "70 cm",
      absorptionTime: "90 a 120 días",
      tensileRetention: "60% a los 7 días / 30% a los 14 días",
      coating: "Copolímero de Glicólido y Épsilon-Caprolactona",
      sterilization: "Óxido de Etileno (EO)",
      basePrice: 34.00,
      defaultUsp: "4-0",
      uspOptions: ["2-0", "3-0", "4-0", "5-0"],
      clinicalUses: "Sutura intradérmica subcuticular estética, cirugía plástica reconstructiva y urología."
    },
    {
      id: "pga-rapid",
      codeBase: "SM-PGR",
      name: "PGA Rapid (Ácido Poliglicólico Rápido) SUTUMED®",
      subtitle: "Multifilamento Absorbible de Corto Plazo sin Necesidad de Retiro de Puntos",
      category: "absorbible",
      filament: "multifilamento",
      needleGroup: "cortante",
      specialty: "gineco",
      colorHex: "#E11D48",
      colorName: "Incoloro / Rojo",
      image: "assets/img/sutumed-pga-rapid.svg",
      needleDesc: "3/8 Círculo Cortante Reverso (P-3) 16mm",
      threadLength: "70 cm",
      absorptionTime: "40 a 45 días",
      tensileRetention: "50% a los 5 días / 0% a los 14 días",
      coating: "Estearato de Calcio de Baja Fricción",
      sterilization: "Radiación Gamma / EO",
      basePrice: 32.50,
      defaultUsp: "4-0",
      uspOptions: ["2-0", "3-0", "4-0", "5-0"],
      clinicalUses: "Episiotomías, circuncisión, mucosa oral, odontología quirúrgica y piel pediátrica."
    },
    {
      id: "nylon",
      codeBase: "SM-NYL",
      name: "Nylon Monofilamento (Poliamida 6/6.6) SUTUMED®",
      subtitle: "Sutura Sintética No Absorbible para Cierre Cutáneo de Precisión",
      category: "no-absorbible",
      filament: "monofilamento",
      needleGroup: "cortante",
      specialty: "plastica",
      colorHex: "#059669",
      colorName: "Negro / Azul",
      image: "assets/img/sutumed-nylon.svg",
      needleDesc: "3/8 Círculo Cortante Reverso (FS-1) 24mm",
      threadLength: "75 cm",
      absorptionTime: "No Absorbible (Encapsulación gradual)",
      tensileRetention: "Alta resistencia tensil permanente",
      coating: "Monofilamento Extruido Liso No Capilar",
      sterilization: "Óxido de Etileno (EO)",
      basePrice: 19.80,
      defaultUsp: "3-0",
      uspOptions: ["0", "2-0", "3-0", "4-0", "5-0", "6-0"],
      clinicalUses: "Cierre de piel en cirugía general, cirugía plástica, traumatología y urgencias."
    },
    {
      id: "polipropileno",
      codeBase: "SM-PPR",
      name: "Polipropileno Monofilamento SUTUMED®",
      subtitle: "Sutura Sintética No Absorbible Inerte para Cirugía Cardiovascular y Plástica",
      category: "no-absorbible",
      filament: "monofilamento",
      needleGroup: "especial",
      specialty: "cardio",
      colorHex: "#0284C7",
      colorName: "Azul Real",
      image: "assets/img/sutumed-polipropileno.svg",
      needleDesc: "3/8 Círculo Doble Aguja Ahusada (RB-1) 17mm",
      threadLength: "75 cm",
      absorptionTime: "No Absorbible (100% Inerte)",
      tensileRetention: "Indefinida (No se degrada ni debilita in vivo)",
      coating: "Polímero Isotáctico de Polipropileno",
      sterilization: "Óxido de Etileno (EO)",
      basePrice: 29.90,
      defaultUsp: "5-0",
      uspOptions: ["0", "2-0", "3-0", "4-0", "5-0", "6-0"],
      clinicalUses: "Cirugía cardiovascular, anastomosis vasculares, fijación de mallas de hernia y cirugía plástica."
    },
    {
      id: "seda",
      codeBase: "SM-SED",
      name: "Seda Negra Trenzada SUTUMED®",
      subtitle: "Multifilamento Natural No Absorbible Siliconado de Máxima Manejabilidad",
      category: "no-absorbible",
      filament: "multifilamento",
      needleGroup: "cortante",
      specialty: "general",
      colorHex: "#0EA5E9",
      colorName: "Negro Intenso",
      image: "assets/img/sutumed-seda.svg",
      needleDesc: "3/8 Círculo Cortante (FS) 26mm",
      threadLength: "75 cm",
      absorptionTime: "No Absorbible (Fibroína natural)",
      tensileRetention: "Excelente seguridad de nudo quirúrgico",
      coating: "Cera de Abejas Médica y Silicona",
      sterilization: "Óxido de Etileno (EO)",
      basePrice: 18.90,
      defaultUsp: "2-0",
      uspOptions: ["1", "0", "2-0", "3-0", "4-0", "5-0"],
      clinicalUses: "Cirugía oral y maxilofacial, fijación de drenajes quirúrgicos, ligaduras y piel."
    },
    {
      id: "poliester",
      codeBase: "SM-POL",
      name: "Poliéster Trenzado Recubierto SUTUMED®",
      subtitle: "Multifilamento Sintético No Absorbible de Alta Resistencia",
      category: "no-absorbible",
      filament: "multifilamento",
      needleGroup: "especial",
      specialty: "cardio",
      colorHex: "#16A34A",
      colorName: "Verde Quirúrgico",
      image: "assets/img/sutumed-poliester.svg",
      needleDesc: "1/2 Círculo Ahusada / Espatulada (V-7) 26mm",
      threadLength: "75 cm",
      absorptionTime: "No Absorbible (Permanente)",
      tensileRetention: "Permanente de ultra-alta tensión",
      coating: "Silicona Médica / Polibutilato",
      sterilization: "Óxido de Etileno (EO)",
      basePrice: 33.40,
      defaultUsp: "2-0",
      uspOptions: ["1", "0", "2-0", "3-0", "4-0"],
      clinicalUses: "Reemplazo valvular cardíaco, ortopedia (reparación tendinosa) y cirugía general."
    },
    {
      id: "acero",
      codeBase: "SM-ACQ",
      name: "Acero Quirúrgico Inoxidable 316L SUTUMED®",
      subtitle: "Monofilamento Metálico No Absorbible para Esternotomía y Ortopedia",
      category: "no-absorbible",
      filament: "monofilamento",
      needleGroup: "especial",
      specialty: "cardio",
      colorHex: "#CA8A04",
      colorName: "Plata Metálico",
      image: "assets/img/sutumed-acero.svg",
      needleDesc: "1/2 Círculo Cortante Convencional (CCS) 48mm",
      threadLength: "45 cm (Sobre x 4 hebras)",
      absorptionTime: "Permanente (Aleación 316L LVM)",
      tensileRetention: "Máxima rigidez estructural permanente",
      coating: "Acero Quirúrgico Electropulido",
      sterilization: "Óxido de Etileno / Gamma",
      basePrice: 44.00,
      defaultUsp: "5",
      uspOptions: ["5", "4", "2", "1", "0"],
      clinicalUses: "Cierre de esternón en cirugía cardiotorácica, cerclaje óseo y traumatología."
    }
  ];

  // Estado global de filtros y carrito de cotización
  let activeCategory = "all";
  let quoteCart = [];

  /* ==========================================================================
     2. FUNCIÓN DE REGISTRO EN EL MONITOR JQUERY (EVIDENCIA DE MÉTODOS)
     ========================================================================== */
  function logJqueryAction(methodName, detail) {
    const time = new Date().toLocaleTimeString("es-ES", { hour12: false });
    const $logBox = $("#jqueryLogOutput");
    const $entry = $(`<div class="log-entry">[${time}] <strong>${methodName}</strong> → ${detail}</div>`);
    $logBox.prepend($entry);
    if ($logBox.children().length > 18) {
      $logBox.children().last().remove();
    }
  }

  function showToast(message) {
    const $toast = $("#toastNotification");
    $("#toastMessage").text(message);
    $toast.stop(true, true).fadeIn(220).delay(2400).fadeOut(350);
  }

  /* ==========================================================================
     3. RENDERIZADO DE TARJETAS (CARDS) Y OPCIONES DEL FORMULARIO
     ========================================================================== */
  function renderCatalogCards(products) {
    const $grid = $("#catalogGrid");
    $grid.empty();

    $.each(products, function (index, item) {
      const uspOptionsHtml = $.map(item.uspOptions, function (usp) {
        const selected = usp === item.defaultUsp ? "selected" : "";
        return `<option value="${usp}" ${selected}>USP ${usp}</option>`;
      }).join("");

      const badgeText = item.category === "absorbible" ? "Absorbible" : "No Absorbible";
      const filamentText = item.filament === "monofilamento" ? "Monofilamento" : "Multifilamento";
      const initialSku = `${item.codeBase}-${item.defaultUsp.replace("-", "")}`;

      const cardHtml = `
        <article class="suture-card"
                 data-id="${item.id}"
                 data-category="${item.category}"
                 data-filament="${item.filament}"
                 data-needle="${item.needleGroup}"
                 data-specialty="${item.specialty}"
                 data-price="${item.basePrice}"
                 data-name="${item.name.toLowerCase()} ${item.subtitle.toLowerCase()} ${item.clinicalUses.toLowerCase()}">
          <div class="card-usp-stripe" style="background: ${item.colorHex};"></div>
          <div class="card-media">
            <div class="card-badges-top">
              <span class="badge-absorption ${item.category}">${badgeText}</span>
              <span class="badge-filament">${filamentText}</span>
            </div>
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
          </div>

          <div class="card-body">
            <div class="card-sku-row">
              <span class="sku-code" id="sku-${item.id}">REF: ${initialSku}</span>
              <span>Color: ${item.colorName}</span>
            </div>
            <h3 class="card-title">${item.name}</h3>
            <p class="card-subtitle">${item.subtitle}</p>

            <!-- Selección Dinámica de Calibre USP en la Tarjeta -->
            <div class="card-dynamic-selector">
              <div class="selector-row">
                <label for="usp-select-${item.id}">Seleccionar Calibre USP:</label>
                <select id="usp-select-${item.id}" class="select-card-usp" data-id="${item.id}">
                  ${uspOptionsHtml}
                </select>
              </div>
            </div>

            <div class="card-quick-meta">
              <div class="meta-pill">
                <span>Aguja Quirúrgica</span>
                <strong>${item.needleDesc}</strong>
              </div>
              <div class="meta-pill">
                <span>Tiempo de Absorción</span>
                <strong>${item.absorptionTime}</strong>
              </div>
            </div>

            <!-- Ficha Técnica Desplegable con .slideToggle() -->
            <div class="card-tech-drawer" id="spec-drawer-${item.id}" style="display: none;">
              <ul>
                <li><strong>Retención Tensil:</strong> ${item.tensileRetention}</li>
                <li><strong>Recubrimiento:</strong> ${item.coating}</li>
                <li><strong>Longitud de Hebra:</strong> ${item.threadLength} (${item.sterilization})</li>
                <li><strong>Uso Clínico:</strong> ${item.clinicalUses}</li>
              </ul>
            </div>

            <div class="card-price-row">
              <div>
                <span class="price-tag" id="price-${item.id}">$${item.basePrice.toFixed(2)} USD</span>
                <span class="price-unit">/ Caja x 12 sobres</span>
              </div>
              <span class="badge-stock" style="font-size:0.74rem;color:#16A34A;font-weight:700;">● En Stock</span>
            </div>

            <div class="card-actions">
              <button type="button" class="btn-card-spec" data-id="${item.id}">
                📋 Ficha Técnica
              </button>
              <button type="button" class="btn-card-quote" data-id="${item.id}">
                + Cotizar Caja
              </button>
              <button type="button" class="btn-card-modal" data-id="${item.id}">
                🔍 Vista Rápida de Empaque (.fadeToggle)
              </button>
            </div>
          </div>
        </article>
      `;

      $grid.append(cardHtml);
    });
  }

  function populateFormSelect() {
    const $select = $("#primarySuture");
    $.each(sutumedCatalog, function (_, item) {
      $select.append(`<option value="${item.name}">${item.name} — ($${item.basePrice.toFixed(2)} / Caja)</option>`);
    });
  }

  // Inicializar catálogo y select del formulario
  renderCatalogCards(sutumedCatalog);
  populateFormSelect();

  /* ==========================================================================
     4. SELECCIONES DINÁMICAS Y FILTROS DE CATEGORÍAS (.hide() / .show() / .fadeIn())
     ========================================================================== */
  function applyCatalogFilters() {
    const searchQuery = $("#searchInput").val().toLowerCase().trim();
    const needleFilter = $("#filterNeedle").val();
    const specialtyFilter = $("#filterSpecialty").val();
    let visibleCount = 0;

    $(".suture-card").each(function () {
      const $card = $(this);
      const cardCat = $card.data("category");
      const cardFilament = $card.data("filament");
      const cardNeedle = $card.data("needle");
      const cardSpecialty = $card.data("specialty");
      const cardSearchText = $card.data("name");

      // Evaluación de categoría o estructura de filamento
      let matchesCategory = false;
      if (activeCategory === "all") {
        matchesCategory = true;
      } else if (activeCategory === "absorbible" || activeCategory === "no-absorbible") {
        matchesCategory = cardCat === activeCategory;
      } else if (activeCategory === "monofilamento" || activeCategory === "multifilamento") {
        matchesCategory = cardFilament === activeCategory;
      }

      const matchesNeedle = needleFilter === "all" || cardNeedle === needleFilter;
      const matchesSpecialty = specialtyFilter === "all" || cardSpecialty === specialtyFilter;
      const matchesSearch = searchQuery === "" || cardSearchText.indexOf(searchQuery) !== -1;

      if (matchesCategory && matchesNeedle && matchesSpecialty && matchesSearch) {
        $card.stop(true, true).fadeIn(220); // Uso de visibilidad jQuery
        visibleCount++;
      } else {
        $card.stop(true, true).hide(); // Uso explícito de .hide()
      }
    });

    $("#visibleProductsCount").text(visibleCount);

    // Mostrar u ocultar botón de restablecer filtros usando .show() y .hide()
    const hasActiveFilter =
      activeCategory !== "all" ||
      needleFilter !== "all" ||
      specialtyFilter !== "all" ||
      searchQuery !== "";

    if (hasActiveFilter) {
      $("#btnResetFilters").show();
    } else {
      $("#btnResetFilters").hide();
    }

    // Mostrar u ocultar estado vacío con .show() y .hide()
    if (visibleCount === 0) {
      $("#emptyCatalogState").fadeIn(200);
    } else {
      $("#emptyCatalogState").hide();
    }
  }

  // Evento en botones de categoría
  $(".cat-btn").on("click", function () {
    const $btn = $(this);
    $(".cat-btn").removeClass("active");
    $btn.addClass("active");

    activeCategory = $btn.data("category");
    applyCatalogFilters();
    logJqueryAction(".hide() / .fadeIn()", `Filtro categoría: "${activeCategory}"`);
  });

  // Eventos en selecciones dinámicas (Aguja, Especialidad, Búsqueda)
  $("#filterNeedle, #filterSpecialty").on("change", function () {
    applyCatalogFilters();
    logJqueryAction("change + .hide()/.show()", `Filtro dinámico: ${$(this).attr("id")} = ${$(this).val()}`);
  });

  $("#searchInput").on("input keyup", function () {
    applyCatalogFilters();
  });

  // Ordenamiento dinámico del catálogo
  $("#sortCatalog").on("change", function () {
    const sortBy = $(this).val();
    const $grid = $("#catalogGrid");
    const $cards = $grid.children(".suture-card").get();

    $cards.sort(function (a, b) {
      const priceA = parseFloat($(a).data("price"));
      const priceB = parseFloat($(b).data("price"));
      const nameA = $(a).find(".card-title").text();
      const nameB = $(b).find(".card-title").text();

      if (sortBy === "price-asc") return priceA - priceB;
      if (sortBy === "price-desc") return priceB - priceA;
      if (sortBy === "name-asc") return nameA.localeCompare(nameB);
      return 0;
    });

    $.each($cards, function (_, card) {
      $grid.append(card);
    });

    logJqueryAction("Ordenamiento DOM", `Criterio aplicado: ${sortBy}`);
  });

  // Restablecer todos los filtros usando .show()
  $("#btnResetFilters, #btnEmptyReset").on("click", function () {
    activeCategory = "all";
    $(".cat-btn").removeClass("active");
    $('.cat-btn[data-category="all"]').addClass("active");
    $("#searchInput").val("");
    $("#filterNeedle").val("all");
    $("#filterSpecialty").val("all");
    $("#sortCatalog").val("featured");

    $(".suture-card").show(); // Uso directo de .show()
    $("#emptyCatalogState").hide();
    $("#btnResetFilters").hide();
    $("#visibleProductsCount").text(sutumedCatalog.length);
    logJqueryAction(".show()", "Se restablecieron y mostraron todas las tarjetas del catálogo.");
  });

  // Selección dinámica de Calibre USP dentro de cada tarjeta (actualiza SKU y precio)
  $(document).on("change", ".select-card-usp", function () {
    const prodId = $(this).data("id");
    const selectedUsp = $(this).val();
    const product = sutumedCatalog.find((p) => p.id === prodId);

    if (product) {
      // Pequeño ajuste de precio según calibre fino (ej. 5-0 o 6-0 requiere aguja micro)
      let priceModifier = 0;
      if (selectedUsp === "5-0" || selectedUsp === "6-0") priceModifier = 2.00;
      if (selectedUsp === "1" || selectedUsp === "5") priceModifier = 1.20;

      const updatedPrice = (product.basePrice + priceModifier).toFixed(2);
      const updatedSku = `${product.codeBase}-${selectedUsp.replace("-", "")}`;

      $(`#sku-${prodId}`).fadeOut(100, function () {
        $(this).text(`REF: ${updatedSku}`).fadeIn(150);
      });
      $(`#price-${prodId}`).text(`$${updatedPrice} USD`);

      logJqueryAction("Selección Dinámica USP", `${product.name} → Calibre USP ${selectedUsp} (${updatedSku})`);
    }
  });

  /* ==========================================================================
     5. EFECTOS DE ANIMACIÓN Y VISIBILIDAD: .hide(), .show(), .slideToggle(), .fadeToggle()
     ========================================================================== */

  // A) .slideToggle() en Ficha Técnica individual de cada tarjeta
  $(document).on("click", ".btn-card-spec", function () {
    const prodId = $(this).data("id");
    const $drawer = $(`#spec-drawer-${prodId}`);
    $drawer.stop(true, true).slideToggle(280);
    logJqueryAction(".slideToggle(280)", `Ficha técnica de sutura ID: ${prodId}`);
  });

  // B) .slideToggle() para expandir/contraer todas las fichas técnicas a la vez
  $("#btnToggleAllSpecs").on("click", function () {
    $(".card-tech-drawer").stop(true, true).slideToggle(300);
    logJqueryAction(".slideToggle(300)", "Alternadas todas las fichas técnicas de las tarjetas.");
  });

  // C) .fadeToggle() para mostrar/ocultar la Tabla Comparativa de Absorción
  $("#btnToggleComparePanel, #btnCloseCompare").on("click", function () {
    $("#comparePanel").stop(true, true).fadeToggle(280);
    logJqueryAction(".fadeToggle(280)", "Panel de Tabla Comparativa Clínica de Suturas Sutumed.");
  });

  // D) .slideToggle() en el botón de Certificaciones Clínicas del Hero
  $("#btnHeroSlideInfo").on("click", function () {
    $("#heroCertDrawer").stop(true, true).slideToggle(260);
    logJqueryAction(".slideToggle(260)", "Panel de Certificaciones Clínicas ISO 13485.");
  });

  // E) .slideToggle() en el Menú de Navegación Móvil
  $("#btnMobileMenu").on("click", function () {
    $("#navLinks").stop(true, true).slideToggle(250);
    logJqueryAction(".slideToggle(250)", "Menú de navegación móvil.");
  });

  // F) .hide() en la barra superior de anuncio
  $("#btnHideTopBar").on("click", function () {
    $("#topBar").hide();
    logJqueryAction(".hide()", "Barra superior ocultada.");
  });

  // G) .fadeToggle() en la Consola/Monitor de jQuery
  $("#btnToggleJqueryLog, #btnCloseMonitor").on("click", function () {
    $("#jqueryMonitor").stop(true, true).fadeToggle(220);
    logJqueryAction(".fadeToggle(220)", "Visibilidad de Consola Interactiva jQuery.");
  });

  // H) Botones de prueba directa en la Consola Interactiva jQuery
  $("#demoHideCards").on("click", function () {
    $('.suture-card[data-category="no-absorbible"]').hide();
    $("#visibleProductsCount").text($(".suture-card:visible").length);
    logJqueryAction(".hide()", "Ocultadas suturas No Absorbibles.");
  });

  $("#demoShowCards").on("click", function () {
    $(".suture-card").show();
    $("#visibleProductsCount").text($(".suture-card:visible").length);
    logJqueryAction(".show()", "Mostradas todas las tarjetas de suturas.");
  });

  $("#demoSlideSpecs").on("click", function () {
    $(".card-tech-drawer").stop(true, true).slideToggle(280);
    logJqueryAction(".slideToggle()", "Desplegadas/ocultadas fichas técnicas en tarjetas.");
  });

  $("#demoFadeGuide").on("click", function () {
    $("#comparePanel").stop(true, true).fadeToggle(280);
    logJqueryAction(".fadeToggle()", "Alternada tabla comparativa de absorción.");
  });

  // I) Acordeón de Geometría de Agujas usando .slideToggle()
  $(".accordion-trigger").on("click", function () {
    const $trigger = $(this);
    const $body = $trigger.next(".accordion-body");

    $trigger.toggleClass("active");
    $body.stop(true, true).slideToggle(250);
    logJqueryAction(".slideToggle(250)", `Acordeón de aguja: ${$trigger.find(".acc-title").text()}`);
  });

  // J) Simulador interactivo de Calibre USP
  $(".usp-sim-btn").on("click", function () {
    const $btn = $(this);
    $(".usp-sim-btn").removeClass("active");
    $btn.addClass("active");

    const usp = $btn.data("usp");
    const mm = $btn.data("mm");
    const thickness = $btn.data("thick");
    const useDesc = $btn.data("use");

    $("#simulatedThreadLine").css("height", `${thickness}px`);
    $("#uspDisplayBox").fadeOut(100, function () {
      $("#simUspTitle").text(`USP ${usp}`);
      $("#simUspDiameter").text(mm);
      $("#simUspUse").html(`<strong>Indicación Quirúrgica:</strong> ${useDesc}`);
      $(this).fadeIn(180);
    });

    logJqueryAction("Simulador USP", `Seleccionado calibre USP ${usp} (${mm})`);
  });

  // K) .slideToggle() en Cobertura Logística (Sección Empresa)
  $("#btnToggleCoverage").on("click", function () {
    $("#coverageDetailsBox").stop(true, true).slideToggle(260);
    logJqueryAction(".slideToggle(260)", "Detalle de Cobertura Logística y Almacenamiento Estéril.");
  });

  // L) Modal de Vista Rápida con .fadeToggle()
  $(document).on("click", ".btn-card-modal", function () {
    const prodId = $(this).data("id");
    const item = sutumedCatalog.find((p) => p.id === prodId);
    const chosenUsp = $(`#usp-select-${prodId}`).val() || item.defaultUsp;

    if (!item) return;

    const modalHtml = `
      <div>
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div>
        <span class="badge-absorption ${item.category}" style="display:inline-block;margin-bottom:0.5rem;">
          ${item.category === "absorbible" ? "Sutura Absorbible" : "Sutura No Absorbible"}
        </span>
        <h3 id="modalProductTitle" style="font-size:1.3rem;margin-bottom:0.35rem;">${item.name}</h3>
        <p style="color:#475569;font-size:0.88rem;margin-bottom:0.9rem;">${item.subtitle}</p>
        <ul style="list-style:none;font-size:0.85rem;margin-bottom:1rem;line-height:1.8;">
          <li><strong>Calibre Seleccionado:</strong> USP ${chosenUsp}</li>
          <li><strong>Aguja Atraumática:</strong> ${item.needleDesc}</li>
          <li><strong>Longitud de Hebra:</strong> ${item.threadLength}</li>
          <li><strong>Tiempo de Absorción:</strong> ${item.absorptionTime}</li>
          <li><strong>Fuerza Tensil:</strong> ${item.tensileRetention}</li>
          <li><strong>Esterilización:</strong> ${item.sterilization}</li>
        </ul>
        <button type="button" class="btn btn-primary btn-full btn-modal-add" data-id="${item.id}">
          + Agregar Caja USP ${chosenUsp} a mi Cotización ($${item.basePrice.toFixed(2)} USD)
        </button>
      </div>
    `;

    $("#modalContentBody").html(modalHtml);
    $("#productModalBackdrop").stop(true, true).fadeToggle(220);
    logJqueryAction(".fadeToggle(220)", `Abierta vista rápida de ${item.name}`);
  });

  $("#btnCloseModal, #productModalBackdrop").on("click", function (e) {
    if (e.target === this) {
      $("#productModalBackdrop").stop(true, true).fadeToggle(200);
      logJqueryAction(".fadeToggle(200)", "Cerrada ventana modal de vista rápida.");
    }
  });

  $(document).on("click", ".btn-modal-add", function () {
    const prodId = $(this).data("id");
    addProductToQuote(prodId);
    $("#productModalBackdrop").fadeOut(180);
  });

  /* ==========================================================================
     6. LISTA DE PEDIDO / COTIZADOR DINÁMICO INTERACTIVO
     ========================================================================== */
  function addProductToQuote(prodId) {
    const product = sutumedCatalog.find((p) => p.id === prodId);
    if (!product) return;

    const selectedUsp = $(`#usp-select-${prodId}`).val() || product.defaultUsp;
    const cartKey = `${prodId}-${selectedUsp}`;

    const existing = quoteCart.find((item) => item.key === cartKey);
    if (existing) {
      existing.qty += 1;
    } else {
      quoteCart.push({
        key: cartKey,
        id: product.id,
        name: product.name,
        usp: selectedUsp,
        needle: product.needleDesc,
        price: product.basePrice,
        qty: 1
      });
    }

    // Sincronizar con el formulario de cotización
    $("#primarySuture").val(product.name).trigger("change");
    renderQuoteSummary();
    showToast(`✓ Agregado: ${product.name} (Calibre USP ${selectedUsp})`);
    logJqueryAction("Cotizador Dinámico", `Agregada 1 caja de ${product.name} USP ${selectedUsp}`);
  }

  function renderQuoteSummary() {
    const $container = $("#quoteItemsContainer");
    $container.empty();

    if (quoteCart.length === 0) {
      $container.html(`
        <div style="text-align:center;padding:1.25rem;color:#64748B;font-size:0.85rem;">
          Aún no has agregado cajas desde las tarjetas. Haz clic en <strong>"+ Cotizar Caja"</strong> en cualquier sutura SUTUMED® o selecciónala en el formulario.
        </div>
      `);
      $("#btnClearQuoteList").hide();
      $("#quoteCountBadge").text("0");
      $("#summaryTotalBoxes").text("0 cajas");
      $("#summaryTotalPouches").text("0 sobres");
      $("#summaryDiscountRow").hide();
      $("#summaryGrandTotal").text("$0.00 USD");
      return;
    }

    $("#btnClearQuoteList").show();

    let totalBoxes = 0;
    let rawSubtotal = 0;

    $.each(quoteCart, function (idx, item) {
      totalBoxes += item.qty;
      const lineTotal = item.qty * item.price;
      rawSubtotal += lineTotal;

      $container.append(`
        <div class="quote-item-row">
          <div class="quote-item-info">
            <strong>${item.name} — USP ${item.usp}</strong>
            <span>${item.needle} | $${item.price.toFixed(2)} x ${item.qty} caja(s) = <strong>$${lineTotal.toFixed(2)}</strong></span>
          </div>
          <div class="quote-item-controls">
            <button type="button" class="btn-qty" data-index="${idx}" data-delta="-1">−</button>
            <strong style="min-width:20px;text-align:center;font-size:0.85rem;">${item.qty}</strong>
            <button type="button" class="btn-qty" data-index="${idx}" data-delta="1">+</button>
            <button type="button" class="btn-remove-item" data-index="${idx}" title="Eliminar">✕</button>
          </div>
        </div>
      `);
    });

    // Descuento mayorista automático si lleva 10 o más cajas (10% OFF)
    let discount = 0;
    if (totalBoxes >= 10) {
      discount = rawSubtotal * 0.10;
      $("#summaryDiscountAmount").text(`-$${discount.toFixed(2)} USD (10%)`);
      $("#summaryDiscountRow").show();
    } else {
      $("#summaryDiscountRow").hide();
    }

    const grandTotal = rawSubtotal - discount;

    $("#quoteCountBadge").text(totalBoxes);
    $("#summaryTotalBoxes").text(`${totalBoxes} caja(s)`);
    $("#summaryTotalPouches").text(`${totalBoxes * 12} sobres estériles`);
    $("#summaryGrandTotal").text(`$${grandTotal.toFixed(2)} USD`);

    // Actualizar cantidad total y detalle en el formulario
    $("#boxQuantity").val(totalBoxes).trigger("input");
    const summaryText = quoteCart.map((i) => `${i.qty}x ${i.name} (USP ${i.usp})`).join(", ");
    $("#comments").val(`Solicitud de cotización para: ${summaryText}.`).trigger("input");
  }

  $(document).on("click", ".btn-card-quote", function () {
    const prodId = $(this).data("id");
    addProductToQuote(prodId);
  });

  $(document).on("click", ".btn-qty", function () {
    const idx = $(this).data("index");
    const delta = parseInt($(this).data("delta"), 10);
    if (quoteCart[idx]) {
      quoteCart[idx].qty += delta;
      if (quoteCart[idx].qty <= 0) {
        quoteCart.splice(idx, 1);
      }
      renderQuoteSummary();
    }
  });

  $(document).on("click", ".btn-remove-item", function () {
    const idx = $(this).data("index");
    quoteCart.splice(idx, 1);
    renderQuoteSummary();
  });

  $("#btnClearQuoteList").on("click", function () {
    quoteCart = [];
    renderQuoteSummary();
    logJqueryAction(".hide()", "Lista de pedido vaciada.");
  });

  $("#btnOpenQuoteDrawer").on("click", function () {
    $("html, body").animate({
      scrollTop: $("#cotizacion").offset().top - 75
    }, 500);
  });

  renderQuoteSummary();

  /* ==========================================================================
     7. FORMULARIO CON VALIDACIONES COMPLETAS EN TIEMPO REAL
     ========================================================================== */
  const validators = {
    fullName: function (val) {
      const clean = val.trim();
      const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ.\s]{4,60}$/;
      return {
        valid: regex.test(clean),
        msgValid: "✓ Nombre del profesional o comprador válido.",
        msgError: "Ingresa un nombre válido (mínimo 4 letras, sin números)."
      };
    },
    institution: function (val) {
      const clean = val.trim();
      return {
        valid: clean.length >= 3,
        msgValid: "✓ Institución o clínica verificada.",
        msgError: "Ingresa el nombre de la clínica, hospital o consultorio (mín. 3 caracteres)."
      };
    },
    taxId: function (val) {
      const clean = val.trim();
      const regex = /^[0-9A-Za-z\-]{6,16}$/;
      return {
        valid: regex.test(clean),
        msgValid: "✓ NIT / RUC / Matrícula con formato correcto.",
        msgError: "Ingresa un NIT, RUC o Cédula válido (6 a 16 caracteres alfanuméricos)."
      };
    },
    email: function (val) {
      const clean = val.trim();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      return {
        valid: regex.test(clean),
        msgValid: "✓ Correo electrónico corporativo válido.",
        msgError: "Ingresa un correo electrónico válido (ejemplo: compras@clinica.com)."
      };
    },
    phone: function (val) {
      const clean = val.replace(/[\s\-()]/g, "");
      const regex = /^\+?[0-9]{7,15}$/;
      return {
        valid: regex.test(clean),
        msgValid: "✓ Número de contacto / WhatsApp válido.",
        msgError: "Ingresa un teléfono válido (7 a 15 dígitos numéricos)."
      };
    },
    city: function (val) {
      return {
        valid: val !== "",
        msgValid: "✓ Modalidad de despacho seleccionada.",
        msgError: "Selecciona una modalidad de entrega obligatoria."
      };
    },
    primarySuture: function (val) {
      return {
        valid: val !== "",
        msgValid: "✓ Línea de sutura SUTUMED® seleccionada.",
        msgError: "Selecciona una línea de sutura principal."
      };
    },
    boxQuantity: function (val) {
      const num = parseInt(val, 10);
      return {
        valid: !isNaN(num) && num >= 1 && num <= 500,
        msgValid: num >= 10 ? "✓ Cantidad válida (¡Aplica 10% de descuento mayorista!)." : "✓ Cantidad de cajas válida.",
        msgError: "Ingresa una cantidad válida entre 1 y 500 cajas."
      };
    },
    comments: function (val) {
      const clean = val.trim();
      return {
        valid: clean.length >= 10,
        msgValid: "✓ Especificaciones técnicas registradas correctamente.",
        msgError: "Detalla los calibres o requerimientos (mínimo 10 caracteres)."
      };
    },
    terms: function () {
      const checked = $("#terms").is(":checked");
      return {
        valid: checked,
        msgValid: "✓ Política de tratamiento de datos aceptada.",
        msgError: "Debes aceptar la confirmación sanitaria y de datos."
      };
    }
  };

  function validateSingleField(fieldName, showVisualState) {
    const $fieldWrap = $(`#field-${fieldName}`);
    const $input = $(`#${fieldName}`);
    const val = $input.val() || "";
    const result = validators[fieldName](val);

    if (showVisualState) {
      $fieldWrap.removeClass("is-valid is-invalid");
      const $icon = $fieldWrap.find(".field-status-icon");
      const $feedback = $fieldWrap.find(".field-feedback");

      if (result.valid) {
        $fieldWrap.addClass("is-valid");
        $icon.text("✓").css("color", "#16A34A");
        $feedback.text(result.msgValid).show();
      } else {
        $fieldWrap.addClass("is-invalid");
        $icon.text("✕").css("color", "#DC2626");
        $feedback.text(result.msgError).show();
      }
    }

    updateFormProgress();
    return result.valid;
  }

  function updateFormProgress() {
    const fieldKeys = Object.keys(validators);
    let validCount = 0;

    $.each(fieldKeys, function (_, key) {
      const val = $(`#${key}`).val() || "";
      if (validators[key](val).valid) {
        validCount++;
      }
    });

    const percent = Math.round((validCount / fieldKeys.length) * 100);
    $("#formProgressPercent").text(`${percent}% completado`);
    $("#formProgressBar").css("width", `${percent}%`);

    if (percent === 100) {
      $("#formProgressHint").html("<strong style='color:#16A34A;'>✓ Todos los campos obligatorios están validados. ¡Listo para enviar!</strong>");
    } else {
      $("#formProgressHint").text(`Campos válidos: ${validCount} de ${fieldKeys.length}. Completa los restantes para enviar.`);
    }
  }

  // Vincular eventos en tiempo real (input, keyup, blur, change) a cada campo
  $.each(Object.keys(validators), function (_, fieldName) {
    $(`#${fieldName}`).on("input keyup blur change", function () {
      validateSingleField(fieldName, true);
    });
  });

  // Contador de caracteres en tiempo real para el textarea
  $("#comments").on("input keyup", function () {
    const len = $(this).val().length;
    $("#commentsCounter").text(`${len} / 300`);
  });

  // Botón para autocompletar con datos clínicos de ejemplo y probar validación instantáneamente
  $("#btnFillDemoData").on("click", function () {
    $("#fullName").val("Dra. Valeria Rojas Méndez");
    $("#institution").val("Clínica Quirúrgica Metropolitana");
    $("#taxId").val("901482630-9");
    $("#email").val("adquisiciones@clinicametropolitana.med");
    $("#phone").val("60120550");
    $("#city").val("Despacho Express Local (Mismo Día)");
    $("#primarySuture").val("Ácido Poliglicólico (PGA) SUTUMED®");
    $("#boxQuantity").val("12");
    $("#comments").val("Requerimos 6 cajas de PGA 2-0 aguja CT-1 36mm y 6 cajas de Nylon 3-0 aguja cortante FS-1 con certificado de lote.");
    $("#terms").prop("checked", true);
    $("#commentsCounter").text(`${$("#comments").val().length} / 300`);

    $.each(Object.keys(validators), function (_, key) {
      validateSingleField(key, true);
    });

    showToast("✓ Formulario completado con datos clínicos de prueba.");
    logJqueryAction("Validación en Tiempo Real", "Todos los campos validados al 100%.");
  });

  // Envío del Formulario con Validación Completa y Retroalimentación Interactiva
  $("#matermedQuoteForm").on("submit", function (e) {
    e.preventDefault();

    let allValid = true;
    $.each(Object.keys(validators), function (_, key) {
      const isFieldOk = validateSingleField(key, true);
      if (!isFieldOk) {
        allValid = false;
      }
    });

    if (!allValid) {
      showToast("⚠ Por favor corrige los campos marcados en rojo antes de enviar.");
      logJqueryAction("Validación Fallida", "Se detectaron campos obligatorios incompletos.");
      // Enfocar el primer campo inválido
      $(".form-field.is-invalid").first().find("input, select, textarea").focus();
      return;
    }

    // Construir resumen de éxito
    const folio = "MTM-2026-" + Math.floor(1000 + Math.random() * 9000);
    const fullName = $("#fullName").val().trim();
    const institution = $("#institution").val().trim();
    const taxId = $("#taxId").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();
    const city = $("#city").val();
    const suture = $("#primarySuture").val();
    const qty = $("#boxQuantity").val();
    const notes = $("#comments").val().trim();

    $("#generatedFolio").text(`FOLIO OFICIAL #${folio}`);
    $("#successSummaryDetails").html(`
      <p><strong>Profesional / Comprador:</strong> ${fullName} (${institution} — NIT: ${taxId})</p>
      <p><strong>Contacto:</strong> ${email} | Tel: ${phone}</p>
      <p><strong>Sutura Principal:</strong> ${suture} — <strong>${qty} caja(s) (${qty * 12} sobres estériles)</strong></p>
      <p><strong>Modalidad de Entrega:</strong> ${city}</p>
      <p><strong>Especificaciones:</strong> ${notes}</p>
    `);

    // Enlace dinámico a WhatsApp con el pedido completo
    const waText = encodeURIComponent(
      `Hola MATERMED, envío mi solicitud de cotización #${folio}:\n` +
      `• Cliente: ${fullName} (${institution})\n` +
      `• Sutura SUTUMED: ${suture}\n` +
      `• Cantidad: ${qty} cajas\n` +
      `• Detalle: ${notes}`
    );
    $("#btnSendToWhatsapp").attr("href", `https://wa.me/60120550?text=${waText}`);

    // Ocultar formulario con .slideUp() y mostrar confirmación con .fadeIn()
    $("#matermedQuoteForm").slideUp(300, function () {
      $("#formSuccessBox").fadeIn(350);
    });

    showToast(`🎉 Cotización #${folio} generada exitosamente.`);
    logJqueryAction("Submit + .fadeIn()", `Cotización #${folio} validada y procesada.`);
  });

  // Botón para volver a crear una nueva cotización
  $("#btnNewQuote").on("click", function () {
    $("#matermedQuoteForm")[0].reset();
    $(".form-field").removeClass("is-valid is-invalid");
    $(".field-status-icon").text("");
    $("#commentsCounter").text("0 / 300");
    updateFormProgress();

    $("#formSuccessBox").hide();
    $("#matermedQuoteForm").slideDown(300);
    logJqueryAction(".hide() / .slideDown()", "Formulario reiniciado para nueva cotización.");
  });

  /* ==========================================================================
     8. INTERACCIÓN EN SECCIÓN DE REDES SOCIALES Y DATOS EMPRESARIALES
     ========================================================================== */
  $(".btn-copy-inline").on("click", function () {
    const $btn = $(this);
    const textToCopy = $btn.data("copy");

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy);
    }

    const originalText = $btn.text();
    $btn.text("¡Copiado!").css({ background: "#16A34A", color: "#FFFFFF", borderColor: "#16A34A" });
    showToast(`📋 Copiado al portapapeles: ${textToCopy}`);

    setTimeout(function () {
      $btn.text(originalText).removeAttr("style");
    }, 1800);
  });

  // Efecto interactivo al pasar sobre las tarjetas de redes sociales
  $(".social-item-card").on("mouseenter", function () {
    const net = $(this).data("network");
    logJqueryAction("Hover Red Social", `Canal oficial Matermed: ${net.toUpperCase()}`);
  });
});

