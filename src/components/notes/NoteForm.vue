// componente formulario principal

<template>
  <div class="modal-note-container">
    <div class="d-flex justify-content-around">
      <span>Crear nota</span>
      <span style="font-size: 20px; padding-top: 23px">{{ datos.date }} </span>
    </div>

    <!-- TITLE -->
    <div class="row" style="padding: 5px 30px">
      <div class="col-sm-12 col-md-6">
        <label for="title" class="form-label">Titulo</label>
        <input
          type="text"
          class="form-control title-input"
          id="title"
          placeholder="Ej.:Compras"
          :value="datos.title"
          @input="$emit('setValue', 'title', $event.target.value)"
        />
      </div>

      <!-- DESC -->
      <div class="col-sm-12 col-md-12 my-3">
        <label for="desc" class="form-label"
          >Descripcion de Nota</label
        >
        <textarea
          class="form-control"
          style="max-height: 35vh; min-height: 35vh"
          id="desc"
          rows="3"
          placeholder="Ej.:Pan, sal, agua"
          :value="datos.desc"
          @input="$emit('setValue', 'desc', $event.target.value)"

        ></textarea>
      </div>

      <!-- BOTONES -->
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "ModalNote",
  props: ["datos"],
};
</script>


<style scoped>


span {
  padding-top: 10px;
  text-align: center;
  font-size: 35px;
}

textarea {
  height: 35vh;
}

.title-input,
textarea {
  padding: 12px 30px;

  background: inherit;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border: none;
  outline: none;
  border-radius: 10px;
}

.title-input::placeholder {
  color: rgba(0, 0, 0, 0.568);
}

/* EL FOCUS ES PROBLEMA DE LA CLASE FORM-CONTROL DE BOOTSTRAP */
.title-input:focus {
  background: inherit;
  border: none;
  outline: none;
}

textarea::placeholder {
  color: rgba(0, 0, 0, 0.568);
}

textarea:focus {
  background: inherit;
  border: none;
}

.btn-grad {
  margin: 10px;
  padding: 12px 30px;

  text-align: center;

  background: inherit;
  background-size: 200% auto;

  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>