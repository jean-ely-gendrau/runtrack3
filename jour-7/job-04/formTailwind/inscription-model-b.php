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

    <div class="relative">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 peer" type="text" id="nom" name="nom" placeholder=" ">
      <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto" for="nom">Nom</label>
    </div>

    <div class="relative">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 peer" type="text" id="prenom" name="prenom" placeholder=" ">
      <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto" for="prenom">Prénom</label>
    </div>

    <div class="relative">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 peer" type="text" id="adress" name="adress" placeholder=" ">
      <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto" for="adress">Adresse</label>
    </div>

    <div class="relative">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 peer" type="email" id="email" name="email" placeholder=" ">
      <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto" for="email">Email</label>
    </div>

    <div class="relative">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 peer" type="password" id="password" name="password" placeholder=" ">
      <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto" for="password">Mot de pass</label>
    </div>

    <div class="relative">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 peer" type="password" id="passwordComfirm" name="passwordComfirm" placeholder=" ">
      <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto" for="passwordComfirm">Confirmer le mot de pass</label>
    </div>
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