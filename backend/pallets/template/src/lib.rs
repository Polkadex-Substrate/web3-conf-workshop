#![cfg_attr(not(feature = "std"), no_std)]

/// Edit this file to define custom logic or remove it if it is not needed.
/// Learn more about FRAME and the core library of Substrate FRAME pallets:
/// <https://docs.substrate.io/reference/frame-pallets/>
pub use pallet::*;
use frame_support::traits::Get;

#[cfg(test)]
mod mock;

#[cfg(test)]
mod tests;

#[cfg(feature = "runtime-benchmarks")]
mod benchmarking;

#[frame_support::pallet]
pub mod pallet {
	use frame_support::pallet_prelude::*;
	use frame_system::pallet_prelude::*;
	use frame_support::traits::{Currency, ExistenceRequirement, ReservableCurrency, tokens::fungible, tokens::fungibles::{Create, Inspect, Mutate}};
	use frame_support::dispatch::HasCompact;
	use frame_support::PalletId;
	use frame_support::sp_runtime::traits::AccountIdConversion;

	type BalanceOf<T> =
	<<T as Config>::Currency as Currency<<T as frame_system::Config>::AccountId>>::Balance;
	use frame_support::sp_runtime::SaturatedConversion;

	/// Configure the pallet by specifying the parameters and types on which it depends.
	#[pallet::config]
	pub trait Config: frame_system::Config {
		/// Because this pallet emits events, it depends on the runtime's definition of an event.
		type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;
        /// Currency
		type Currency: Currency<Self::AccountId>
		+ ReservableCurrency<Self::AccountId>
		+ fungible::Inspect<Self::AccountId>;
		/// Identifier for the class of asset.
		type AssetId: Member
		+ Parameter
		+ Default
		+ Copy
		+ HasCompact
		+ MaybeSerializeDeserialize
		+ MaxEncodedLen
		+ TypeInfo;
		/// Asset Create/ Update Origin
		type PoolCreatorOrigin: EnsureOrigin<<Self as frame_system::Config>::Origin>;
        /// Pallet Id
		#[pallet::constant]
		type PoolPalletId: Get<PalletId>;
		/// Asset Manager
		type AssetManager: Create<<Self as frame_system::Config>::AccountId>
		+ Mutate<<Self as frame_system::Config>::AccountId, Balance = u128, AssetId = u128>
		+ Inspect<<Self as frame_system::Config>::AccountId>;
		/// Asset
		type TokenAsset: Get<u128>;
	}

	#[pallet::pallet]
	#[pallet::generate_store(pub(super) trait Store)]
	pub struct Pallet<T>(_);

	// The pallet's runtime storage items.
	// https://docs.substrate.io/main-docs/build/runtime-storage/
	#[pallet::storage]
	#[pallet::getter(fn eth_pool)]
	// Learn more about declaring storage items:
	// https://docs.substrate.io/main-docs/build/runtime-storage/#declaring-storage-items
	pub type TokenPool<T> = StorageValue<_, BalanceOf<T>, ValueQuery>;

	#[pallet::storage]
	#[pallet::getter(fn pdex_pool)]
	pub type PdexPool<T> = StorageValue<_, BalanceOf<T>, ValueQuery>;


	// Pallets use events to inform users when important changes are made.
	// https://docs.substrate.io/main-docs/build/events-errors/
	#[pallet::event]
	#[pallet::generate_deposit(pub(super) fn deposit_event)]
	pub enum Event<T: Config> {
        /// Pool Initialized
		PoolInitialized(u128),
		/// CurrencySwapped
		CurrencySwapped(BalanceOf<T>)
	}

	// Errors inform users that something went wrong.
	#[pallet::error]
	pub enum Error<T> {
		/// Error names should be descriptive.
		NoneValue,
	}

	// Dispatchable functions allows users to interact with the pallet and invoke state changes.
	// These functions materialize as "extrinsics", which are often compared to transactions.
	// Dispatchable functions must be annotated with a weight and must return a DispatchResult.
	#[pallet::call]
	impl<T: Config> Pallet<T> {
		#[pallet::weight(10_000 + T::DbWeight::get().writes(1))]
		pub fn initialize_pool(origin: OriginFor<T>, eth_pool_amount: BalanceOf<T>, pdex_pool_amount: BalanceOf<T>) -> DispatchResult {
			// T::PoolCreatorOrigin::ensure_origin(origin)?;
			// <TokenPool<T>>::put(eth_pool_amount);
			// <PdexPool<T>>::put(pdex_pool_amount);
			// Self::deposit_event(Event::PoolInitialized(T::TokenAsset::get()));
			Ok(())
		}

		#[pallet::weight(10_000 + T::DbWeight::get().writes(1))]
		pub fn swap(origin: OriginFor<T>, amount: BalanceOf<T>) -> DispatchResult {
			// let who = ensure_signed(origin)?;
			// T::Currency::transfer(
			// 	&who,
			// 	&T::PoolPalletId::get().try_into_account().unwrap(),
			// 	amount,
			// 	ExistenceRequirement::AllowDeath,
			// )?;
			// let invariant = <TokenPool<T>>::get() * <PdexPool<T>>::get();
			// let new_pdex_pool = <PdexPool<T>>::get() + amount;
            // let new_token_pool = invariant / new_pdex_pool;
			// let token_out = <TokenPool<T>>::get() - new_token_pool;
			// <PdexPool<T>>::put(new_pdex_pool);
			// <TokenPool<T>>::put(new_token_pool);
			// T::AssetManager::mint_into(T::TokenAsset::get(), &who, token_out.saturated_into::<u128>())?;
			// Self::deposit_event(Event::CurrencySwapped(amount));
			Ok(())
		}

	}
}
