<form class="flex flex-col w-full max-w-lg m-auto border-2 rounded-md p-5 gap-2">
  <fieldset class="flex flex-col gap-5 mb-2">
    <legend class="w-full text-center text-lg mb-2">Chossir son genre</legend>

    <div class="flex flex-wrap gap-5 m-auto">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold" for="homme">Masculin</label>
      <input class="accent-blue-900" type="radio" id="homme" name="genre" value="homme">

      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold" for="femme">Féminin</label>
      <input class="accent-blue-900" type="radio" id="femme" name="genre" value="femme">

      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold" for="nongr">Non-Genré</label>
      <input class="accent-blue-900" type="radio" id="nongr" name="genre" value="nongr">
    </div>

  </fieldset>

  <fieldset class="flex flex-col gap-5">
    <legend class="w-full text-center text-lg mb-2">Renseignez vos informations</legend>

    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nom">Nom</label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="nom" name="nom" placeholder="Votre Nom">

    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="prenom">Prénom</label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="prenom" name="prenom" placeholder="Votre prénom">

    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="adress">Adresse</label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="adress" name="adress" placeholder="Votre adresse">

    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">Email</label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" id="email" name="email" placeholder="Votre email">

    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">Mot de pass</label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" id="password" name="password" placeholder="Votre mot de pass">

    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="passwordComfirm">Confirmer le mot de pass</label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" id="passwordComfirm" name="passwordComfirm" placeholder="Confirmer le mot de pass">

  </fieldset>

  <fieldset class="flex flex-col gap-5">
    <legend class="w-full text-center text-lg mb-2">Choissez vos passions</legend>

    <div class="flex flex-wrap gap-5 justify-center items-center m-auto">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="computer">Informatique</label>
      <input class="w-4 h-4 accent-blue-900 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" type="checkbox" id="computer" name="computer" value="informatique">

      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="travel">Voyage</label>
      <input class="w-4 h-4 accent-blue-900 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" type="checkbox" id="travel" name="travel" value="voyages">

      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sport">Sport</label>
      <input class="w-4 h-4 accent-blue-900 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" type="checkbox" id="sport" name="sport" value="sport">

      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="reading">Lecture</label>
      <input class="w-4 h-4 accent-blue-900 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" type="checkbox" id="reading" name="reading" value="lecture">
    </div>
  </fieldset>

  <button id="btn-validate" type="submit">Valider</button>

</form>