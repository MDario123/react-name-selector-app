{
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
      };
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        name = "react-shell";

        buildInputs = with pkgs; [
          nodejs_23
        ];

        shellHook = ''
          export SHELL=zsh
        '';
      };
    };
}
